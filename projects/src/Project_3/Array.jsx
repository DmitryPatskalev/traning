import { useState } from "react";

export default function Array() {
  const [team, setTeam] = useState([
    "MU",
    "Chelsea",
    "ManCity",
    "Arsenal",
    "LiverPool",
  ]);
  const [value, setValue] = useState();
  function remItem(index) {
    return setTeam([...team.slice(0, index), ...team.slice(0, index)]);
  }
  let list = team.map((elem, index) => {
    return (
      <div>
        id={index + 1} team={elem}
      </div>
    );
  });
  return (
    <div>
      {list}
      <input onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => setTeam([...team, value])}>ADD TEAM</button>
      <button onClick={() => remItem(value)}>REMOVE TEAM</button>
    </div>
  );
}
