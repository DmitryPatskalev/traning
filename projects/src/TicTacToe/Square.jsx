import React from "react";
import css from "./style.module.css";
function Square(props) {
  return (
    <button className={css.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
