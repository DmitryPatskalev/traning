import { useState } from "react";
import css from "./css.module.css";
export default function AddToCart() {
  let product;
  let samsung = [
    {
      id: 1,
      name: "Samsung",
      model: "S21",
      cost: 1300,
    },
  ];
  const [value, setValue] = useState(samsung);
  const [num, setNum] = useState(0);
  product = value.map((elem) => {
    return (
      <tr>
        <td>{elem.id}</td>
        <td>{elem.name}</td>
        <td>{elem.model}</td>
        <td>{elem.cost}</td>
        <td>
          <button className={css.button} onClick={() => setNum(num - 1)}>
            -
          </button>
          <input value={num} className={css.input} />
          <button className={css.button} onClick={() => setNum(num + 1)}>
            +
          </button>
        </td>
        <td>{elem.cost * num}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className={css.table}>
        <tr>
          <th>№</th>
          <th>BRAND</th>
          <th>MODEL</th>
          <th>COST $</th>
          <th>AMOUNT</th>
          <th>SUM</th>
        </tr>
        {product}
      </table>
    </div>
  );
}

const listOfProduct = [
  { id: 1, name: "Samsung", model: "S21", cost: 1300 },
  { id: 2, name: "Apple", model: "X13", cost: 1550 },
  { id: 3, name: "Honor", model: "50", cost: 1250 },
  { id: 4, name: "Xiaomi", model: "Redmi11", cost: 950 },
  { id: 5, name: "Huawei", model: "Nova9", cost: 1300 },
];
