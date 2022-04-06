import css from "./style.module.css";
import { useState } from "react";

export default function Count() {
  const [num, setNum] = useState(0);

  function subtract() {
    setNum((prevCount) => prevCount - 1);
  }
  function add() {
    setNum((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button className={css.button} onClick={subtract}>
        -
      </button>
      <input value={num} className={css.input} />
      <button className={css.button} onClick={add}>
        +
      </button>
    </div>
  );
}
