import css from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className={css.link}>
        <NavLink to="/main">Главная</NavLink>
      </div>
      <div className={css.link}>
        <NavLink to="/photo">Фотогалерея</NavLink>
      </div>
      <div className={css.link}>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    </div>
  );
}
