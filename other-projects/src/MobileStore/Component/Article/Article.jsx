import { Route, Routes } from "react-router-dom";
import AppOrderTable from "../Cart/AppTableOrder";
import Logo from "./Phones/Logo/Logo";
import PhoneGalery from "./Phones/PhoneGalery";

export default function Article() {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<Logo />} />
        <Route path="/photo" element={<PhoneGalery />} />
        <Route path="/cart" element={<AppOrderTable />} />
      </Routes>
    </div>
  );
}
