"use client";

import { TSingleProductWithImage } from "@/types/types";
import Image from "next/image";
import { useShoppingCartContext } from "@/context/shoppingCartContext";
import convertToBanglaNumber from "../../utils/convertToBanglaNumber";

const ProductSelection = ({
  products,
}: {
  products: TSingleProductWithImage;
}) => {
  const { handleProductPrice } = useShoppingCartContext();

  if (!products) {
    return <div>No products found.</div>;
  }

  // Find primary image once
  const primaryImage = products.images.find((img) => img.isPrimary === 1);
  const discountedPrice = Number(products.discounted_price);

  return (
    <div className="md:max-w-5xl max-w-xl mx-auto p-4">
      <h3 className="text-2xl mb-4">আপনার পছন্দের অফারটি সিলেক্ট করুন</h3>
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-3">
        {/* Single Piece Option */}
        <div className="flex w-full p-3 cursor-pointer rounded-lg border bg-white shadow-sm">
          <div className="relative">
            <input
              className="h-4 w-4"
              type="radio"
              onClick={() => handleProductPrice(discountedPrice, 1)}
              id="1-piece"
              name="product-selection"
            />
          </div>
          {primaryImage && (
            <div>
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt || products.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded-md object-cover object-center"
              />
            </div>
          )}
          <div className="ml-3">
            <div className="text-gray-800 text-lg font-medium">
              {products.name} ১ পিছ
            </div>
            <div className="text-base text-gray-600 font-bold">
              ৳ {convertToBanglaNumber(products.discounted_price)}
            </div>
          </div>
        </div>

        {/* Double Piece Option */}
        <div className="flex w-full p-3 cursor-pointer rounded-lg border bg-white shadow-sm">
          <div className="relative">
            <input
              className="h-4 w-4"
              type="radio"
              onClick={() => handleProductPrice(discountedPrice * 2 - 100, 2)}
              id="2-piece"
              name="product-selection"
            />
          </div>
          {primaryImage && (
            <div>
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt || products.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded-md object-cover object-center"
              />
            </div>
          )}
          <div className="ml-3">
            <div className="text-gray-800 text-lg font-medium">
              {products.name} ২ পিছ
            </div>
            <div className="text-base text-gray-600 font-bold">
              ৳ {convertToBanglaNumber(products.discounted_price * 2 - 100)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
