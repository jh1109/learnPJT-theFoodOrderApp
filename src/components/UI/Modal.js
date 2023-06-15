import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={onClose}></div>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>{children}</div>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
