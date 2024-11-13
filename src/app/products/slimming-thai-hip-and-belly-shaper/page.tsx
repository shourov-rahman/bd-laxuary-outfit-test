import SlimmingThaiHeapAndBellyShaper from "@/components/SlimmingThaiHeapAndBellyShaper/SlimmingThaiHeapAndBellyShaper.client";
import { ProductWithImageData } from "@/components/SlimmingThaiHeapAndBellyShaper/ProductWithImageData.server";
import { TSingleProductWithImage } from "@/types/types";

const Page = async () => {
  const { products } = await ProductWithImageData();

  const slimmingProduct = products.find(
    (product) => product.slug === "slimming-thai-hip-and-belly-shaper",
  );

  return (
    <section>
      <SlimmingThaiHeapAndBellyShaper
        products={slimmingProduct as TSingleProductWithImage}
      />
    </section>
  );
};

export default Page;
