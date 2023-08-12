import React from "react";
import "./Modal.scss";

export interface IModalWindow {
  onConfirm: any;
}

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

export default Backdrop;