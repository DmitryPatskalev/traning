import { useState } from "react";
import css from "./css.module.css";

export default function AppTable() {
  const [value, setValue] = useState(0);
  const [sum, sumValue] = useState(120);

  return (
    <div>
      <button className={css.button} onClick={() => setValue(value - 1)}>
        -
      </button>
      <input className={css.input} value={value} />
      <button className={css.button} onClick={() => setValue(value + 1)}>
        +
      </button>
      <span className={css.span}>{sum}</span>
      <div>Total:{value * sum}</div>
    </div>
  );
}
