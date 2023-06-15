import React, { Fragment } from "react";

import classes from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
