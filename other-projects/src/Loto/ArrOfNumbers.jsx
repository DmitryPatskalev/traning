import { useState } from "react";
import css from "./style.module.css";

export default function ArrOfNumbers() {
  let getFiveNumbers = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  };
  let list = getFiveNumbers(36);

  let arrOfBalls = list.map((elem) => {
    return (
      <button className={css.button} key={elem}>
        {elem}
      </button>
    );
  });

  return <div>{arrOfBalls}</div>;
}
