import { useState } from "react";

export default function ToDoList() {
  const [value, setValue] = useState([]);
  const [par, setPar] = useState();
  let result = value.map((elem) => {
    return (
      <ul>
        <li key={elem.id}>{elem}</li>
      </ul>
    );
  });
  return (
    <div>
      <input onChange={(e) => setPar(e.target.value)} />
      <button onClick={() => setValue([...value, par])}>Add</button>
      {result}
    </div>
  );
}
