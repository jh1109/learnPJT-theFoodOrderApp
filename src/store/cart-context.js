import React from "react";

// 생성 할 때 입력하는 값은 초기화 값.
// 실제로 사용하지는 않음.
// 하지만 사용할 때 자동완성을 참고할 수 있음!
const CartContext = React.createContext({
  // 상태로 관리할 데이터들
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
