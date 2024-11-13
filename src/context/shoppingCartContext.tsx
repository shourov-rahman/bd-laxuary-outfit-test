"use client";

import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";

type TShoppingCartContextProvider = {
  children: React.ReactNode;
};

type TShoppingCartContext = {
  shippingCost: number;
  productPrice: number;
  productQuantity: number;
  handleShippingCost: (cost: number) => void;
  handleProductPrice: (cost: number, quantity: number) => void;
  total: number;
};

export const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: TShoppingCartContextProvider) => {
  const [shippingCost, setShippingCost] = useState(0);
  const [productPrice, setProductPrice] = useState(630);
  const [productQuantity, setProductQuantity] = useState(1);

  const total = productPrice + shippingCost;

  const handleShippingCost = useCallback(
    (cost: number) => {
      setShippingCost(cost);
    },
    [setShippingCost],
  );

  const handleProductPrice = useCallback(
    (price: number, quantity: number) => {
      setProductPrice(price);
      setProductQuantity(quantity);
    },
    [setProductPrice],
  );

  const contextValue = useMemo(
    () => ({
      shippingCost,
      productPrice,
      productQuantity,
      handleShippingCost,
      handleProductPrice,
      total,
    }),
    [
      shippingCost,
      handleShippingCost,
      productPrice,
      handleProductPrice,
      productQuantity,
      total,
    ],
  );

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
