/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CART_ACTION_TYPE } from "../actions/Cart";
import { cartInitialState, cartReducer } from "../reducers/cart";
export const CartContext = createContext();

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    return dispatch({
      type: CART_ACTION_TYPE.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    return dispatch({
      type: CART_ACTION_TYPE.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: CART_ACTION_TYPE.CLEAR_CART,
    });
  };

  return { state, addToCart, removeFromCart, clearCart };
};
export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
