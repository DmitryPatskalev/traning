import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog,index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((messages,index) => (
    <Message key={index} message={messages.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Write a message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Click me</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
