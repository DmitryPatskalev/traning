import { useState } from "react";
import css from "./css.module.css";

export default function ToDoList() {
  const [list, setList] = useState([]);
  const [par, setPar] = useState();
  let result = list.map((elem, index) => {
    return (
      <p key={index} onClick={() => remItem(index)}>
        {elem}
      </p>
    );
  });
  function remItem(index) {
    setList([...list.slice(0, index), ...list.slice(0, index + 1)]);
  }
  return (
    <div className={css.list}>
      <input
        placeholder="Write the text"
        className={css.input}
        onChange={(event) => setPar(event.target.value)}
      />
      <button className={css.button} onClick={() => setList([...list, par])}>
        Add Event
      </button>
      {result}
    </div>
  );
}
