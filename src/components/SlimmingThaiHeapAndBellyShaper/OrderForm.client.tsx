"use client";

import { useRef } from "react";
import { useShoppingCartContext } from "@/context/shoppingCartContext";
import { OrderFromAction } from "@/actions/orderForm.action";
import { TSingleProductWithImage } from "@/types/types";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton.server";

type OrderFormClientProps = {
  products: TSingleProductWithImage;
};

const OrderFormClient = ({ products }: OrderFormClientProps) => {
  const { total, productQuantity, shippingCost } = useShoppingCartContext();
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const onSubmitHandler = (formData: FormData) => {
    OrderFromAction(formData);
    ref.current?.reset();
    router.push("/order");
  };

  return (
    <form
      action={onSubmitHandler}
      ref={ref}
      className="flex flex-col gap-y-2 m-8"
    >
      <h2 className="text-2xl"> আপনার নাম, ঠিকানা ও মোবাইল নাম্বার দিন </h2>
      <input
        name="customer_name"
        type="text"
        placeholder="আপনার নাম*"
        className="rounded px-4 py-2 border-2 mt-4"
        required
      />
      <input
        name="customer_mobile"
        type="tel"
        placeholder="মোবাইল নাম্বার*"
        className="rounded px-4 py-2 border-2 mt-4"
        required
      />
      <input
        name="customer_address"
        type="text"
        placeholder="সম্পূর্ণ ঠিকানা*"
        className="rounded px-4 py-2 border-2 mt-4"
        required
      />
      <input
        name="product_color"
        type="text"
        placeholder="কালার লিখুন ( স্কিন কালার ও কালো কালার আছে)"
        className="rounded px-4 py-2 border-2 mt-4"
      />
      <input
        name="product_weight_and_height"
        type="text"
        placeholder="ওজন এবং উচ্চতা"
        className="rounded px-4 py-2 border-2 mt-4"
      />
      <input type="hidden" name="product_name" value={products.name} />
      <input type="hidden" name="product_quantity" value={productQuantity} />
      <input type="hidden" name="product_shipping" value={shippingCost} />
      <input type="hidden" name="total" value={total} />

      <SubmitButton />
    </form>
  );
};

export default OrderFormClient;
