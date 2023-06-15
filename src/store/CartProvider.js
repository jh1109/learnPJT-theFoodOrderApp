import React from "react";
import CartContext from "./cart-context";

// Provider 사이에 children을 지정함으로써,
// 하위에 속하는 컴포넌트에 해당 context를 모두 제공할 수 있게 함을 의미한다.
const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  // 기본값
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
