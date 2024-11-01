import { getAllProductWithImage } from "@/services/query";

export async function ProductWithImageData() {
  const products = await getAllProductWithImage();
  return { products };
}
