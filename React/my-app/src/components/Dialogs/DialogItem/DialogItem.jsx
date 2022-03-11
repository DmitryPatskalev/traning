import { NavLink } from "react-router-dom";
import cat from "./../../Photo/cat.jpg";
import css from "./../../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>
        <img className={css.cat} src={cat} />
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
