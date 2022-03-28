import logo from "./logo192.png";
import css from "./Style.module.css";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className={css.logo} />
      <h1 className={css.logo_text}>React Facts</h1>
      <h3 className={css.title_text}>React Course Project 1</h3>
    </nav>
  );
}
