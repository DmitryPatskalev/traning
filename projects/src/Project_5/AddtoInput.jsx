import { useState } from "react";

export default function AddToInput() {
  const [notes, setNotes] = useState([]);
  function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += +elem;
    }
    return sum;
  }
  function changeHandler(index, event) {
    setNotes([
      ...notes.slice(0, index),
      event.target.value,
      ...notes.slice(index + 1),
    ]);
  }
  return (
    <div>
      <input onChange={(event) => changeHandler(0, event)} />
      <input onChange={(event) => changeHandler(1, event)} />
      <input onChange={(event) => changeHandler(2, event)} />
      {getSum(notes)}
    </div>
  );
}
