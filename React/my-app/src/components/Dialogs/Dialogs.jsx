import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((messages) => (
    <Message message={messages.message} />
  ));
  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
