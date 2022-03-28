import { useState } from "react";
import css from "./CSS.module.css";

export default function Calculate() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();
  const [num, setNum] = useState();
  const [fact, getFact] = useState();
  const [num1, setNum1] = useState();
  const [sqrt, setSqrt] = useState();

  let numFact = (x) => {
    let sum = 1;
    for (let i = 1; i <= x; i++) {
      sum *= i;
    }
    return sum;
  };
  let getSqrt = (sqrt) => {
    return Math.sqrt(sqrt).toFixed(3);
  };
  return (
    <div className={css.body}>
      <input
        placeholder="input the number"
        className={css.input}
        onChange={(event) => setValue1(event.target.value)}
      />
      <input
        placeholder="input the number"
        className={css.input}
        onChange={(event) => setValue2(event.target.value)}
      />
      <input className={css.input} value={result} />
      <br />
      <button
        className={css.button}
        onClick={() => setResult(Number(value1) + Number(value2))}
      >
        +
      </button>
      <button
        className={css.button}
        onClick={() => setResult(Number(value1) - Number(value2))}
      >
        -
      </button>
      <button
        className={css.button}
        onClick={() => setResult(Number(value1) * Number(value2))}
      >
        *
      </button>
      <button
        className={css.button}
        onClick={() => setResult(Number(value1) / Number(value2))}
      >
        /
      </button>
      <br />
      <button className={css.fact} onClick={() => getFact(numFact(num))}>
        FACTORIAL
      </button>
      <input
        placeholder="input the number"
        className={css.sqrt}
        onChange={(event) => setNum(event.target.value)}
      />
      <input className={css.sqrt} value={fact} />
      <br />

      <button className={css.fact} onClick={() => setSqrt(getSqrt(num1))}>
        √ SQRT
      </button>
      <input
        placeholder="input the number"
        className={css.sqrt2}
        onChange={(event) => setNum1(event.target.value)}
      />
      <input className={css.sqrt2} value={sqrt} />
    </div>
  );
}
