import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={css.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsDate = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Danik" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Sergei" },
    { id: 6, name: "Ira" },
  ];
  let messageDate = [
    { id: 1, message: "Hello!!" },
    { id: 2, message: "How is it going?" },
    { id: 3, message: "I am fine, thaks!" },
  ];

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id} />
        <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id} />
        <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id} />
        <DialogItem name={dialogsDate[3].name} id={dialogsDate[3].id} />
        <DialogItem name={dialogsDate[4].name} id={dialogsDate[4].id} />
        <DialogItem name={dialogsDate[5].name} id={dialogsDate[5].id} />
      </div>
      <div className={css.messages}>
        <Message message={messageDate[0].message} />
        <Message message={messageDate[1].message} />
        <Message message={messageDate[2].message} />
      </div>
    </div>
  );
};
export default Dialogs;
