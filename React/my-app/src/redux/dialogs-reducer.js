const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

const dialogReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = "";
    state.messages.push({ id: 4, message: body });
  }
  return state;
};

export default dialogReducer;
