import { useState } from "react";

export default function ObjectState() {
  const [name, setName] = useState({ fName: "", lName: "" });
  function onInput(e) {
    setName({ ...name, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <input type="text" name="fName" onChange={onInput} />
      <input type="text" name="lName" onChange={onInput} />
      <p>{name.fName}</p>
      <p>{name.lName}</p>
    </div>
  );
}
