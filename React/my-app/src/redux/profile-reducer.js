const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      message: state.newPostText,
      like: 10,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
};

export default profileReducer;
