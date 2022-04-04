import { useState } from "react";

export default function StateRender() {
  const [visible, setVisible] = useState();
  let elem;
  if (visible) {
    elem = <p>SHOW</p>;
  }
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "HIDE" : "SHOW"}
      </button>
      {elem}
      <Description />
    </div>
  );
}

const initNotes = [
  {
    id: 1,
    name: "name1",
    description: ["Long description 1", "Long description 2"],
    show: false,
  },
  { id: 2, name: "name2", description: "Long description 2", show: false },
  { id: 3, name: "name3", description: "Long description 3", show: false },
];
function Description() {
  const [notes, setNotes] = useState(initNotes);
  function showDesc(id) {
    setNotes(
      notes.map((elem) => {
        if (elem.id === id) {
          return { ...elem, show: !elem.show };
        } else {
          return elem;
        }
      })
    );
  }
  let result = notes.map((elem, index) => {
    let desc;
    if (elem.show) {
      desc = <i>{elem.description}</i>;
    }
    return (
      <p>
        {elem.name}
        {desc}
        <button onClick={() => showDesc(elem.id)}>SHOW</button>
      </p>
    );
  });
  return <div>{result}</div>;
}
