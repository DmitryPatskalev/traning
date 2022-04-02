import Count from "./Count";
import css from "./style.module.css";
const listOfProduct = [
  { id: 1, name: "Samsung", model: "S21", cost: 1300 },
  { id: 2, name: "Apple", model: "X13", cost: 1550 },
  { id: 3, name: "Honor", model: "50", cost: 1250 },
  { id: 4, name: "Xiaomi", model: "Redmi11", cost: 950 },
  { id: 5, name: "Huawei", model: "Nova9", cost: 1300 },
];
export default function AppOrderTable() {
  return (
    <div className={css.style}>
      <table className={css.table}>
        <tr>
          <th>№</th>
          <th>BRAND</th>
          <th>MODEL</th>
          <th>COST $</th>
          <th>AMOUNT</th>
          <th>SUM</th>
        </tr>
        <tfoot>
          <tr>
            <th colSpan={5} style={{ textAlign: "right" }}>
              Total
            </th>
            <th></th>
          </tr>
        </tfoot>
        {listOfProduct.map((elem) => {
          return (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.model}</td>
              <td>{elem.cost}</td>
              <td>
                <Count />
              </td>
              <td></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
