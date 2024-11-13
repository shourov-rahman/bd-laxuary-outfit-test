"use server";

import { db } from "@/libs/DB";
import { orders } from "@/models/Schema";
import { revalidatePath } from "next/cache";

export async function OrderFromAction(formData: FormData) {
  const rawFormData = {
    product_name: formData.get("product_name") as string,
    customer_name: formData.get("customer_name") as string,
    customer_mobile: formData.get("customer_mobile") as string,
    customer_address: formData.get("customer_address") as string,
    product_color: formData.get("product_color") as string,
    product_weight_and_height: formData.get(
      "product_weight_and_height",
    ) as string,
    product_quantity: Number(formData.get("product_quantity") || 1),
    product_shipping: Number(formData.get("product_shipping") || 70),
    total: Number(formData.get("total") || 0),
  };

  try {
    await db.insert(orders).values(rawFormData);
    revalidatePath("/");
    return { success: true, message: "Order created successfully" };
  } catch (error) {
    return { success: false, message: "Error creating order" };
  }
}
