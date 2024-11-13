import { TSingleProductWithImage } from "@/types/types";
import { useShoppingCartContext } from "@/context/shoppingCartContext";
import Image from "next/image";
import convertToBanglaNumber from "../../utils/convertToBanglaNumber";
import OrderFormClient from "./OrderForm.client";
import ShippingClient from "./Shipping.client";

type OrderDetailsProps = {
  products: TSingleProductWithImage;
};

const OrderDetails = ({ products }: OrderDetailsProps) => {
  const { productPrice, productQuantity, total } = useShoppingCartContext();

  return (
    <section className="bg-white p-4">
      <section className="md:max-w-5xl max-w-xl mx-auto">
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <section className="order-2">
            <OrderFormClient products={products} />
          </section>

          <section className="bg-gray-50 p-6 rounded-md">
            <ul className="">
              <section key={products.slug} className="flex">
                <section>
                  {products.images
                    .filter((image) => image.image_order === 4)
                    .map((image) => (
                      <section key={image.image_order}>
                        <Image
                          src={image.url}
                          alt={image.alt || ""}
                          width={200}
                          height={200}
                          className="rounded-md object-cover object-center "
                        />
                      </section>
                    ))}
                </section>
                <section className="grid grid-cols-[2fr,1fr,1fr] gap-x-3">
                  <section className="text-base place-self-center font-medium text-gray-700 ">
                    {products.name}
                  </section>
                  <section className="text-base  place-self-center font-medium text-gray-900">
                    ×{convertToBanglaNumber(productQuantity)}
                  </section>
                  <section className="text-base justify-self-end place-self-center font-bold text-gray-900">
                    ৳ {convertToBanglaNumber(productPrice)}
                  </section>
                </section>
              </section>
            </ul>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-base">
                SubTotal
                <span className="ml-auto text-base font-bold">
                  ৳ {convertToBanglaNumber(productPrice)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base">
                Shipping
                <span className="ml-auto">
                  <ShippingClient />
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4">
                Total
                <span className="ml-auto text-base">
                  ৳ {convertToBanglaNumber(total)}
                </span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default OrderDetails;
