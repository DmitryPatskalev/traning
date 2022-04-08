import { useState } from "react";
import css from "./css.module.css";

let listOfProduct = [{ id: 1, brand: "Samsung", model: "S21", price: 1500 }];
export default function AppProject9() {
  const [value, setValue] = useState(listOfProduct);
  const [par, setPar] = useState();
  let result = value.map((elem) => {
    return (
      <tr className={css.table}>
        <td className={css.par}>{elem.id}</td>
        <td>{elem.brand}</td>
        <td>{elem.model}</td>
        <td className={css.price}>{elem.price}</td>
        <td>
          <Sum />
        </td>
      </tr>
    );
  });
  return (
    <div>
      <p onChange={(event) => setValue(event.target.value)}></p>
      <button onClick={() => setPar(result)}>Add to Cart</button>
      <Table par={par} />
    </div>
  );
}
function Table(props) {
  return (
    <table className={css.table}>
      <tr>
        <th className={css.par}>№</th>
        <th>BRAND</th>
        <th>MODEL</th>
        <th className={css.price}>PRICE</th>
        <th>AMOUNT</th>
      </tr>
      {props.par}
    </table>
  );
}
function Sum() {
  const [input, setInput] = useState(0);
  return (
    <div>
      <button onClick={() => setInput(input - 1)}>-</button>
      <input
        className={css.input}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => setInput(input + 1)}>+</button>
    </div>
  );
}
