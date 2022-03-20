import logo from "./logo192.png";
import css from "./CSS.module.css";
export default function Navbar() {
  return (
    <nav>
      <img className={css.nav_icon} src={logo} />
      <h1 className={css.logo_text}>React Facts</h1>
      <h3 className={css.logo_title}>React Course</h3>
    </nav>
  );
}
