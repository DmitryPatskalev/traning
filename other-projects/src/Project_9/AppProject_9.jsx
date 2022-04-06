import { useState } from "react";
import css from "./css.module.css";

let listOfProduct = [{ id: 1, brand: "Samsung", model: "S21", price: 1500 }];
export default function AppProject9() {
  const [value, setValue] = useState(listOfProduct);
  const [par, setPar] = useState();
  let result = value.map((elem) => {
    return (
      <div>
        <tbody className={css.table}>
          <td>{elem.id}</td>
          <td>{elem.brand}</td>
          <td>{elem.model}</td>
          <td>{elem.price}</td>
        </tbody>
      </div>
    );
  });
  return (
    <div>
      <p onChange={(event) => setValue(event.target.value)}>{result}</p>
      <button onClick={() => setPar(result)}>BTN</button>

      <Table par={par} />
    </div>
  );
}
function Table(props) {
  return (
    <table className={css.table}>
      <tr>
        <th>№</th>
        <th>BRAND</th>
        <th>MODEL</th>
        <th>PRICE</th>
      </tr>
      {props.par}
    </table>
  );
}
