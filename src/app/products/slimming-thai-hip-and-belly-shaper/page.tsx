import SlimmingThaiHeapAndBellyShaper from "@/components/SlimmingThaiHeapAndBellyShaper/SlimmingThaiHeapAndBellyShaper.client";
import { ProductWithImageData } from "@/components/SlimmingThaiHeapAndBellyShaper/ProductWithImageData.server";

const Page = async () => {
  const { products } = await ProductWithImageData();
  return (
    <div>
      <SlimmingThaiHeapAndBellyShaper products={products} />
    </div>
  );
};

export default Page;
