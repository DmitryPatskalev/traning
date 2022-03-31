import css from "./Style.module.css";
import { useState } from "react";

export default function Count() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button className={css.button} onClick={() => setNum(Number(num) - 1)}>
        -
      </button>
      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        className={css.input}
      />
      <button className={css.button} onClick={() => setNum(Number(num + 1))}>
        +
      </button>
    </div>
  );
}
