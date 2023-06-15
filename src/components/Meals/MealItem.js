import React, { Fragment } from "react";

import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  return (
    <Fragment>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
    </Fragment>
  );
};

export default MealItem;
