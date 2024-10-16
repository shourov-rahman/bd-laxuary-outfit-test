import { useContext } from "react";
import { ShoppingCartContext } from "./shoppingCartContext";

const useShoppingCartContext = () => useContext(ShoppingCartContext);
export default useShoppingCartContext;
