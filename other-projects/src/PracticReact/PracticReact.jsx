import css from "./css.module.css";
import HukEffect from "./HukEffect";
import JSX_lesson2 from "./Lesson_2_JSX";
import Render from "./Lesson_3_Render";
import Props from "./Lesson_4_Props";
import OnClick from "./Lesson_6_onClick";

export default function PracticReact() {
  return (
    <div className={css.body}>
      <JSX_lesson2 />
      <hr />
      <Render />
      <hr />
      <Props />
      <hr />
      <OnClick />
      <hr />
      <HukEffect />
    </div>
  );
}
