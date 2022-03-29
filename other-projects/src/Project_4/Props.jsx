import addToCart from "./AppProject_4";

export default function Product(props) {
  return (
    <div>
      id:{props.id}, name: {props.name}, cost: {props.cost},
      {props.inCart ? "В корзине" : "Не в корзине"}
      <button onClick={() => addToCart(props.id)}>in Cart</button>
    </div>
  );
}
