import { useState } from "react";

export default function AddText() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState();
  let result = notes.map((elem, index) => {
    return (
      <p key={index}>
        id={index + 1} value={elem}
      </p>
    );
  });
  return (
    <div>
      {result}
      <input onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => setNotes([...notes, value])}>ADD</button>
    </div>
  );
}
