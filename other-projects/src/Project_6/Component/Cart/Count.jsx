import css from "./style.module.css";
import { useState } from "react";

export default function Count() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button className={css.button} onClick={() => setNum(num - 1)}>
        -
      </button>
      <input value={num} className={css.input} />
      <button className={css.button} onClick={() => setNum(num + 1)}>
        +
      </button>
    </div>
  );
}
