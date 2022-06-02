import { NavLink } from "react-router-dom";
import css from "./../../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.users}>
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
