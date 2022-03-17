import css from "./CSS.module.css";
import stadium from "./stadium.jpg";
export default function Hero() {
  return (
    <div>
      <div className={css.description}>OLD TRAFFORD</div>
      <section className={css.img_stadium}>
        <img src={stadium} />
      </section>
    </div>
  );
}
