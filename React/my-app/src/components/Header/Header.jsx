import css from "./Header.module.css";
import gerb from "./..//Photo/gerb.jpg";

const Header = () => {
  return (
    <header className={css.header}>
      <img src={gerb} />
    </header>
  );
};
export default Header;
