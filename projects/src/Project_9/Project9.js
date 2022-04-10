import ClassToDoList from "./ClassToDoList";
import CountClass from "./CountClass";
import Count from "./CountClass";
import CountFunc from "./CountFunc";
import css from "./css.module.css";
import ObjectState from "./ObjectState";
import ToDoList from "./ToDoFunc";

export default function Huk() {
  return (
    <div className={css.body}>
      <CountClass />
      <hr />
      <CountFunc />
      <hr />
      <ObjectState />
      <hr />
      <ClassToDoList />
      <hr />
      <ToDoList />
    </div>
  );
}
