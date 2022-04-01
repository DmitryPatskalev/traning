import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/main">Главная</NavLink>
      </div>
      <div>
        <NavLink to="/photo">Фотогалерея</NavLink>
      </div>
      <div>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    </div>
  );
}
