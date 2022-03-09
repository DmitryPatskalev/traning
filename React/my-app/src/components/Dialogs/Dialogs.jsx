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
  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Danik" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Sergei" },
    { id: 6, name: "Ira" },
  ];
  let messages = [
    { id: 1, message: "Hello!!" },
    { id: 2, message: "How is it going?" },
    { id: 3, message: "I am fine, thaks!" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((messages) => (
    <Message message={messages.message} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
