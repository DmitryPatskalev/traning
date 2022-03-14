import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((messages) => (
    <Message message={messages.message} />
  ));
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
    newPostElement.current.value = "";
  };
  let newPostElement = React.useRef();

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newPostElement}
            placeholder="Write a message"
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Click me</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
