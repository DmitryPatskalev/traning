import { useState } from "react";

export default function AddText() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState();
  let result = notes.map((elem) => {
    return (
      <tr>
        <td>{elem}</td>
      </tr>
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
