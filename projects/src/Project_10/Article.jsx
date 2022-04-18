import { Route, Routes } from "react-router-dom";
import Menu from "./Article/menu";
import Adress from "./Article/adress";
import News from "./Article/news";
import Contact from "./Article/contact";
import Setting from "./Article/setting";

export default function Article() {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </div>
  );
}
