import css from "./table.module.css";

let teams = [
  { id: 1, TEAM: "Manchester Utd", MP: 38, W: 25, D: 8, L: 5 },
  { id: 2, TEAM: "Manchester City", MP: 38, W: 23, D: 8, L: 7 },
  { id: 3, TEAM: "Liverpool", MP: 38, W: 20, D: 10, L: 8 },
  { id: 4, TEAM: "Chelsea", MP: 38, W: 19, D: 12, L: 7 },
  { id: 5, TEAM: "Arsenal", MP: 38, W: 18, D: 10, L: 10 },
  { id: 6, TEAM: "Tottenham", MP: 38, W: 15, D: 13, L: 10 },
];

export default function CreateTable() {
  let listOfTeams = teams.map((elem) => {
    return (
      <tr key={elem.id}>
        <td className={css.tableNumber}>{elem.id}</td>
        <td className={css.td}>{elem.TEAM}</td>
        <td className={css.tdEl}>{elem.MP}</td>
        <td className={css.tdEl}>{elem.W}</td>
        <td className={css.tdEl}>{elem.D}</td>
        <td className={css.tdEl}>{elem.L}</td>
      </tr>
    );
  });
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>TEAM</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
        </tr>
      </thead>
      <tbody>{listOfTeams}</tbody>
    </table>
  );
}
