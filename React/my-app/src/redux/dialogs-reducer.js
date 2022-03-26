const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Danik" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Sergei" },
    { id: 6, name: "Ira" },
  ],
  messages: [
    { id: 1, message: "Hello!!" },
    { id: 2, message: "How is it going?" },
    { id: 3, message: "I am fine, thaks!" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export default dialogReducer;
