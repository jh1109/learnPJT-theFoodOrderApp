import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
// import Cart from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  // const [showCart, setShowCart] = useState(false);
  // const cartHandler = () => {
  //   setShowCart(true);
  // };
  // const closeCartHandler = () => {
  //   setShowCart(false);
  // };

  // 지정한 context에 접근하기 위해서는 가장 가까운 Provider를 찾는다.
  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.length;

  // Item의 개수말고 전체 총 구매수량을 알고 싶다면?
  // reduce에서 두개의 인자는 cur: 누적 숫자, item: 현재 살펴보고 있는 항목
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    // <Fragment>
    // {showCart && <Cart onClose={closeCartHandler} />}
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    // </Fragment>
  );
};

// 왜 HeaderCartButton 컴포넌트에 Cart를 넣으면 값이 안불러오지...?
// 값을 불러오지 않은게 아니라 color가 white 였음!!
// color에 대한 스타일링이 없어 상속받는데 HeaderCartButton에 위치시키면,
// className={classes.header}의 영향을 받음. 그래서 color가 white로 적용됨!
// 어차피 포털로 이동시킬 거니 관련있는 해당 컴포넌트에 위치시켰음
export default HeaderCartButton;
