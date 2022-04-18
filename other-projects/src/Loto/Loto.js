import LotoGame from "./LotoGame";
import RandomFiveNumbers from "./RandomFiveNumbers";
import css from "./style.module.css";
export default function Loto() {
  return (
    <div className={css.body}>
      <LotoGame />
      <RandomFiveNumbers />
    </div>
  );
}
