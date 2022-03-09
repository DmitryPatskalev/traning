import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
