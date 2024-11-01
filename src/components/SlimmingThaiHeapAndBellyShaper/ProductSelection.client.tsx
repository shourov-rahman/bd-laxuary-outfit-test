"use client";

import { TProductWithImages, TProductImage } from "@/types/types";
import Image from "next/image";
import { useShoppingCartContext } from "@/context/shoppingCartContext";
import convertToBanglaNumber from "@/utils/convertToBanglaNumber";

const ProductSelection = ({ products }: { products: TProductWithImages[] }) => {
  // const { handleProductPrice } = useShoppingCartContext();
  const context = useShoppingCartContext();
  console.log("Context:", context); // Debugging log

  if (!context) {
    return <div>Loading...</div>; // or some other placeholder
  }

  const { handleProductPrice } = context;

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="md:max-w-5xl max-w-xl mx-auto p-4">
      <h3 className="text-2xl mb-4">আপনার পছন্দের অফারটি সিলেক্ট করুন</h3>
      <div>
        {products.map((product) => {
          const primaryImage = product.images.find(
            (img: TProductImage) => img.isPrimary === 1,
          );
          console.log(primaryImage);
          return (
            <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-3">
              <div className="flex w-full p-3 cursor-pointer rounded-lg border bg-white shadow-sm">
                <div className="relative">
                  <input
                    className="h-4 w-4"
                    type="radio"
                    onClick={() => handleProductPrice(630, 1)}
                    id=" 1-piece"
                    name="product-selection"
                  />
                </div>
                {primaryImage && (
                  <div key={product.slug}>
                    <Image
                      src={primaryImage.url}
                      alt={primaryImage.alt || ""}
                      width={200}
                      height={200}
                      className="w-24 h-24 rounded-md object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <div className=" text-gray-800 text-lg font-medium">
                    {product.name} ১ পিছ
                  </div>
                  <div className="text-base text-gray-600 font-bold">
                    ৳ {convertToBanglaNumber(product.discounted_price)}
                  </div>
                </div>
              </div>
              <div className="flex w-full p-3 cursor-pointer rounded-lg border bg-white shadow-sm">
                <div className="relative">
                  <input
                    className="h-4 w-4"
                    type="radio"
                    onClick={() => handleProductPrice(1240, 1)}
                    id=" 1-piece"
                    name="product-selection"
                  />
                </div>
                {primaryImage && (
                  <div key={product.slug}>
                    <Image
                      src={primaryImage.url}
                      alt={primaryImage.alt || ""}
                      width={200}
                      height={200}
                      className="w-24 h-24 rounded-md object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <div className=" text-gray-800 text-lg font-medium">
                    {product.name} ২ পিছ
                  </div>
                  <div className="text-base text-gray-600 font-bold">
                    ৳ {convertToBanglaNumber(product.discounted_price * 2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSelection;
