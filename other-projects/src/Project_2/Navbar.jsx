import logo from "./MU.jpg";
import css from "./CSS.module.css";

export default function Navbar() {
  return (
    <nav className={css.nav}>
      <img className={css.logo_image} src={logo} />
      <span className={css.logo_text}>MANCHESTER UNITED</span>
    </nav>
  );
}
