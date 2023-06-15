import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        {/* URL이라면 src='URL 주소'로 작성하면 된다. */}
        <img src={mealsImage} alt="맛있는 음식이 가득한 테이블" />
      </div>
    </Fragment>
  );
};

export default Header;
