import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/menu">MENU</NavLink>
      </div>
      <div>
        <NavLink to="/news">NEWS</NavLink>
      </div>
      <div>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
      <div>
        <NavLink to="/adress">ADRESS</NavLink>
      </div>
      <div>
        <NavLink to="/setting">SETTING</NavLink>
      </div>
    </div>
  );
}
