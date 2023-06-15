import React, { Fragment } from "react";

import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <Fragment>
      {/* 왜 HeaderCartButton 컴포넌트에 Cart를 넣으면 값이 안불러오지...? */}
      {/* 값을 불러오지 않은게 아니라 color가 white 였음!! */}
      {/* color에 대한 스타일링이 없어 상속받는데 HeaderCartButton에 위치시키면,
      className={classes.header}의 영향을 받음. 그래서 color가 white로 적용됨!
      어차피 포털로 이동시킬 거니 관련있는 해당 컴포넌트에 위치시켰음*/}
      <Cart />
      <button type="button" className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
