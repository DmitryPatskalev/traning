import { NavLink, Route, Routes } from "react-router-dom";
import AppOrderTable from "../Cart/AppTableOrder";
// import Characteristic from "../Article/Characteristics";

export default function Navbar() {
  return (
    <div>
      <div>
        <NavLink to="/main">Гланая</NavLink>
      </div>
      <div>
        <NavLink to="/photo">Фотогалерея</NavLink>
      </div>
      <div>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
      <Routes>
        <Route path="/cart" element={<AppOrderTable />} />
      </Routes>
    </div>
  );
}
