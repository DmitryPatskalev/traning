import { useState } from "react";
import css from "./css.module.css";

export default function AddToCart() {
  const [value, setValue] = useState(0);
  function addItem() {
    setValue((prevValue) => prevValue + 1);
  }
  function removeItem() {
    setValue(0);
  }
  return (
    <div>
      <button onClick={addItem}>ADD</button>
      <p>{value}</p>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}
