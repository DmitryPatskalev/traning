import AddToCart from "./AddToCart";
import css from "./css.module.css";
import ToDoList from "./ToDoList";

export default function Project10() {
  return (
    <div className={css.body}>
      <AddToCart />
      <hr />
      <ToDoList />
    </div>
  );
}
