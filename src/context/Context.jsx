import { createContext, useReducer, useContext } from "react";
import cartReducer from "./cartReducer";
export const Cart = createContext(null);
const CartContextProvder = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {items:[]});

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContextProvder;
export const CartContext = () => {
  return useContext(Cart);
};
