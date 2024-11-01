import {
  sqliteTable,
  integer,
  text,
  real,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  slug: text("slug").notNull().unique(),
  discounted_price: real("discounted_price").notNull(),
  regular_price: real("regular_price").notNull(),
});

export const productImages = sqliteTable(
  "product_images",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    product_id: integer("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    url: text("url").notNull(),
    alt: text("alt"),
    isPrimary: integer("isPrimary").notNull(),
    image_order: integer("image_order").notNull(),
  },
  (table) => {
    return {
      unq_product_image: uniqueIndex("unq_product_image").on(
        table.product_id,
        table.url,
      ),
    };
  },
);

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
export type InsertProductImage = typeof productImages.$inferInsert;
export type SelectProductImage = typeof productImages.$inferSelect;
