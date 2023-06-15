import React, { Fragment } from "react";

import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
