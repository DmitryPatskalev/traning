import Article from "./Component/Article/Article";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import css from "./Style.module.css";

export default function MainPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.nav}>
        <Navbar />
      </div>
      <div className={css.article}>
        <Article />
      </div>
      <div className={css.footer}>Footer</div>
    </div>
  );
}
