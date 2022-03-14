import { renderIntiveTree } from "./../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How is it going?", like: 15 },
      { id: 2, message: "I am fine, thanks!", like: 20 },
    ],
    newPostText: "Internet Technologies",
  },
  dialogsPage: {
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
  },
  sidebar: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Danik" },
  ],
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    like: 10,
  };
  state.profilePage.posts.push(newPost);
  renderIntiveTree(state);
  state.profilePage.newPostText = "";
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderIntiveTree(state);
};

export default state;
