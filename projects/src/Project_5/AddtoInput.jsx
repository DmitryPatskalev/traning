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
      <hr />
      <RedArray />
    </div>
  );
}

function RedArray() {
  const [num, setNum] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);
  let arr = num.map((elem, index) => {
    return (
      <p key={index} onClick={() => setEditNum(index)}>
        {elem}
      </p>
    );
  });

  function changeItem(event) {
    setNum([
      ...num.slice(0, editNum),
      event.target.value,
      ...num.slice(editNum + 1),
    ]);
  }
  return (
    <div>
      {arr}
      <input value={editNum ? num[editNum] : ""} onChange={changeItem} />
    </div>
  );
}
