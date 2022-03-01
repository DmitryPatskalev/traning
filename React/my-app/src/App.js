import logo from "./logo.svg";
import "./App.css";

const prods = [
  { id: 1, name: "product1", cost: 100 },
  { id: 2, name: "product2", cost: 200 },
  { id: 3, name: "product3", cost: 300 },
];
function App() {
  let table = prods.map(function (elem) {
    return (
      <tr>
        <td>
          {elem.name} {elem.cost}
        </td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td>Название</td>
          <td>Стоимость</td>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
}

export default App;
