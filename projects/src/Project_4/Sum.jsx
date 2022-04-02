import { useState } from "react";
import css from "./css.module.css";

export default function Sum(props) {
  const [total, setTotal] = useState(1500);
  return (
    <div className={css.style}>
      <table className={css.table}>
        <tr>
          <th>№</th>
          <th>NAME</th>
          <th>COST</th>
          <th>AMOUNT</th>
          <th>SUM</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Manchester United</td>
          <td>{total}</td>
          <td>
            <Count />
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

function Count(props) {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button className={css.button} onClick={() => setNum(num - 1)}>
        -
      </button>
      <input className={css.input} value={num} />
      <button className={css.button} onClick={() => setNum(num + 1)}>
        +
      </button>
      <br />
      <span>{props.num}</span>
    </div>
  );
}
