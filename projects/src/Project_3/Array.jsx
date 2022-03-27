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
  const [num, setNumber] = useState();
  const [result, setResult] = useState();
  let list = team.map((elem, index) => {
    return (
      <div>
        id={index + 1} team={elem}
      </div>
    );
  });
  let func = (num) => {
    let sum = 0;
    let str = String(num);
    let arr = str.split("");
    for (let elem of arr) {
      sum += Number(elem);
    }
    return sum;
  };
  return (
    <div>
      {list}
      <input onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => setTeam([...team, value])}>ADD TEAM</button> <br />
      <hr />
      <input
        onChange={(event) => setNumber(event.target.value)}
        placeholder="input the numbers"
      />
      <button onClick={() => setResult(func(num))}>CLICK</button>
      Sum of numbers = <input value={result} />
    </div>
  );
}
