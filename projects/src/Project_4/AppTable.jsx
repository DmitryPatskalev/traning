import { useState } from "react";
import css from "./css.module.css";

let teams = [
  { id: 1, TEAM: "Manchester Utd", MP: 38, W: 25, D: 8, L: 5 },
  { id: 2, TEAM: "Manchester City", MP: 38, W: 23, D: 8, L: 7 },
  { id: 3, TEAM: "Liverpool", MP: 38, W: 20, D: 10, L: 8 },
  { id: 4, TEAM: "Chelsea", MP: 38, W: 19, D: 12, L: 7 },
  { id: 5, TEAM: "Arsenal", MP: 38, W: 18, D: 10, L: 10 },
  { id: 6, TEAM: "Tottenham", MP: 38, W: 15, D: 13, L: 10 },
];
export default function Apptable() {
  return (
    <div className={css.style}>
      <table className={css.table}>
        <tr>
          <th>№</th>
          <th>TEAM</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Count</th>
          <th>Equal</th>
        </tr>
        {teams.map((elem) => {
          return (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.TEAM}</td>
              <td>{elem.MP}</td>
              <td>{elem.W}</td>
              <td>{elem.D}</td>
              <td>{elem.L}</td>
              <td>
                <Count />
              </td>
              <td></td>
            </tr>
          );
        })}
      </table>
      <Count />
    </div>
  );
}
function Count() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button className={css.button} onClick={() => setNum(num - 1)}>
        -
      </button>
      <input className={css.input} value={num} />
      <button className={css.button} onClick={() => setNum(num + 1)}>
        +
      </button>
    </div>
  );
}
