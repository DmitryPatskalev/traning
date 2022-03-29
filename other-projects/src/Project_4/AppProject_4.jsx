import Product from "./Props";
import { useState } from "react";
export default function AppProject_4() {
  let prods = [
    { id: 1, name: "prod1", cost: 100 },
    { id: 2, name: "prod2", cost: 200 },
    { id: 3, name: "prod3", cost: 300 },
  ];

  let result = prods.map((prod) => {
    return <Product id={prod.id} name={prod.name} cost={prod.cost} />;
  });

  let initProds = [
    { id: 1, name: "product1", cost: 100 },
    { id: 2, name: "product2", cost: 200 },
    { id: 3, name: "product3", cost: 300 },
  ];
  const [prod, setProds] = useState(initProds);
  let addToCart = (id) => {
    setProds(
      prod.map((elem) => {
        if (elem.id == id) {
          elem.inCart = true;
        }
        return elem;
      })
    );
  };

  let products = prod.map((elem) => {
    return (
      <Product
        key={prod.id}
        id={elem.id}
        name={elem.name}
        cost={elem.cost}
        inCart={elem.inCart}
        addToCart={addToCart}
      />
    );
  });

  return (
    <div>
      {result}
      <hr />
      {products}
      <hr />
    </div>
  );
}
