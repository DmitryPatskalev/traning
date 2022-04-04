import { useState } from "react";

export default function StructursAdd() {
  const [value, setValue] = useState([1, 2, 3, 4, 5]);
  const [input, setInput] = useState();
  let arr = value.map((elem, index) => {
    return (
      <ul>
        <li>
          id={index + 1} num={elem}
        </li>
      </ul>
    );
  });
  return (
    <div>
      {arr}
      <input onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => setValue([...value, input])}>ADD</button>
    </div>
  );
}
