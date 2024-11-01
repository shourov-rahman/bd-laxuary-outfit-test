import {
  products,
  productImages,
  InsertProduct,
  InsertProductImage,
} from "@/models/Schema";
import { db } from "@/libs/DB";
import { productData, productImageData } from "@/data/product";
import { TProduct, TProductImage, TProductWithImages } from "@/types/types";
import { sql, eq } from "drizzle-orm";

const insertProducts = async () => {
  const productsToInsert: InsertProduct[] = productData.map(
    (product: TProduct) => ({
      name: product.name,
      description: product.description,
      slug: product.slug,
      discounted_price: product.discounted_price,
      regular_price: product.regular_price,
    }),
  );
  const result = await db
    .insert(products)
    .values(productsToInsert)
    .onConflictDoUpdate({
      target: products.slug,
      set: {
        name: sql`EXCLUDED.name`,
        description: sql`EXCLUDED.description`,
        discounted_price: sql`EXCLUDED.discounted_price`,
        regular_price: sql`EXCLUDED.regular_price`,
      },
    })
    .returning({ id: products.id });

  return result.map((r) => r.id);
};

const insertProductImages = async () => {
  try {
    const productsImageToInsert: InsertProductImage[] = productImageData.map(
      (item: TProductImage) => ({
        product_id: item.product_id,
        url: item.url,
        alt: item.alt,
        isPrimary: item.isPrimary,
        image_order: item.image_order,
      }),
    );

    const result = await db
      .insert(productImages)
      .values(productsImageToInsert)
      .onConflictDoUpdate({
        target: [productImages.product_id, productImages.url],
        set: {
          alt: sql`EXCLUDED.alt`,
          isPrimary: sql`EXCLUDED.isPrimary`,
          image_order: sql`EXCLUDED.image_order`,
        },
      })
      .returning({ productId: productImages.product_id });

    return result.map((r) => r.productId);
  } catch (error) {
    console.error("Error in insertProductImages:", error);
    throw error;
  }
};

// Execute the functions sequentially
const insert = async () => {
  try {
    const productIds = await insertProducts();
    console.log(`Inserted products with IDs: ${productIds.join(", ")}`);

    const imageIds = await insertProductImages();
    console.log(`Inserted images for products IDs: ${imageIds.join(", ")}`);
  } catch (error) {
    console.error("Error in insert execution:", error);
  }
};

insert();

export const getAllProducts = async (): Promise<TProduct[]> => {
  try {
    const productsToFetch = await db.select().from(products);
    return productsToFetch.map(
      (product): TProduct => ({
        name: product.name,
        description: product.description,
        slug: product.slug,
        discounted_price: product.discounted_price,
        regular_price: product.regular_price,
      }),
    );
  } catch (error) {
    throw new Error(
      `Error fetching products: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
};

export const getAllProductWithImage = async (): Promise<
  TProductWithImages[]
> => {
  try {
    const productsWithImages = await db
      .select({
        id: products.id,
        name: products.name,
        description: products.description,
        slug: products.slug,
        discounted_price: products.discounted_price,
        regular_price: products.regular_price,
        images: sql<string>`json_group_array(json_object(
          'product_id', ${productImages.product_id},
          'url', ${productImages.url},
          'alt', ${productImages.alt},
          'isPrimary', ${productImages.isPrimary},
          'image_order', ${productImages.image_order}
        ))`.as("images"),
      })
      .from(products)
      .leftJoin(productImages, eq(productImages.product_id, products.id))
      .groupBy(products.id);

    return productsWithImages.map((product): TProductWithImages => {
      let parsedImages: TProductImage[] = [];
      try {
        const images = JSON.parse(product.images);
        parsedImages = Array.isArray(images)
          ? images.filter((img) => img && img.url && img.product_id)
          : [];
      } catch (error) {
        console.error("Error parsing images for product:", product.slug, error);
      }

      return {
        name: product.name,
        description: product.description,
        slug: product.slug,
        discounted_price: product.discounted_price,
        regular_price: product.regular_price,
        images: parsedImages,
      };
    });
  } catch (error) {
    throw new Error(
      `Error fetching products: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
};
