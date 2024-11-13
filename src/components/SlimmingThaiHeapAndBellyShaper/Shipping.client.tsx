"use client";

import { useShoppingCartContext } from "@/context/shoppingCartContext";

const ShippingClient = () => {
  const { handleShippingCost } = useShoppingCartContext();

  return (
    <div>
      <ul className="space-y-3">
        <li className="flex items-center gap-x-2.5">
          <input
            type="radio"
            name="shipping"
            id="outside-dhaka"
            value="outside-dhaka"
            onChange={() => handleShippingCost(120)}
            className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
          />
          <label
            htmlFor="outside-dhaka"
            className="text-base text-gray-700 font-medium"
          >
            ঢাকা সিটির বাইরে: <span className="font-bold ml-4"> ৳ ১২০ </span>
          </label>
        </li>

        <li className="flex items-center gap-x-2.5">
          <input
            type="radio"
            name="shipping"
            id="inside-dhaka"
            value="inside-dhaka"
            onChange={() => handleShippingCost(70)}
            className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
          />
          <label
            htmlFor="inside-dhaka"
            className="text-base text-gray-700 font-medium"
          >
            ঢাকা সিটি: <span className="font-bold ml-4"> ৳ ৭০ </span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default ShippingClient;
