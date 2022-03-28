import { useState } from "react";
import css from "./css.module.css";

export default function AppProject_3() {
  const [num, setNum] = useState([1, 2, 3]);
  const [input, setInput] = useState();

  const [visible, setVisible] = useState();

  const [visible1, setVisible1] = useState();
  const [visible2, setVisible2] = useState();
  const [visible3, setVisible3] = useState();
  let elem;
  if (visible) {
    elem = <p>Visible</p>;
  }
  var result = num.map((elem) => {
    return <p>{elem}</p>;
  });
  let elem1;
  if (visible1) {
    elem1 = <span>Hello!</span>;
  }
  let elem2;
  if (visible2) {
    elem2 = <span>Dima!</span>;
  }
  let elem3;
  if (visible3) {
    elem3 = <span>How are you?</span>;
  }

  return (
    <div className={css.body}>
      {result}
      <input onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => setNum([...num, input])}>BTN</button>
      <hr />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "HIDE" : "SHOW"}
      </button>
      {elem}
      <hr />
      <button onClick={() => setVisible1(!visible1)}>
        {visible1 ? "Hide" : "Show"}
      </button>
      {elem1}
      <br />
      <button onClick={() => setVisible2(!visible2)}>
        {visible2 ? "Hide" : "Show"}
      </button>
      {elem2}
      <br />
      <button onClick={() => setVisible3(!visible3)}>
        {visible3 ? "Hide" : "Show"}
      </button>
      {elem3}
    </div>
  );
}
