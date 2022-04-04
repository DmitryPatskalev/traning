import { useState } from "react";

export default function Props() {
  return (
    <div>
      <Name />
    </div>
  );
}
function Name() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={() => setValue(value - 1)}>BTN MINUS</button>
      <input style={{ textAlign: "center", width: "60px" }} value={value} />
      <button onClick={() => setValue(value + 1)}>BTN PLUS</button>
    </div>
  );
  function Num(props) {
    return (
      <div>
        <input value={props.value} />
      </div>
    );
  }
}
