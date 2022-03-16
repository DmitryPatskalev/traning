import logo from "./logo192.png";
import css from "./CSS.module.css";
export default function Navbar() {
  return (
    <nav>
      <img className={css.nav_icon} src={logo} />
      <h3 className="nav_icon">React Facts</h3>
      <h4 className="nav_title">React Course</h4>
    </nav>
  );
}
