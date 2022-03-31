import css from "./Style.module.css";

export default function ListOfProduct() {
  const listOfProduct = [
    { id: 1, name: "Samsung", model: "S21", cost: 1300 },
    { id: 2, name: "Apple", model: "X13", cost: 1550 },
    { id: 3, name: "Honor", model: "50", cost: 1250 },
    { id: 4, name: "Xiaomi", model: "Redmi11", cost: 950 },
    { id: 5, name: "Huawei", model: "Nova9", cost: 1300 },
  ];
  {
    listOfProduct.map((elem) => {
      return (
        <tr className={css.elem}>
          <td>{elem.id}</td>
          <td>{elem.name}</td>
          <td>{elem.model}</td>
          <td>{elem.cost}</td>
        </tr>
      );
    });
  }
}
