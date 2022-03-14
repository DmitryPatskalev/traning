import { renderIntiveTree } from "./../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How is it going?", like: 15 },
      { id: 2, message: "I am fine, thanks!", like: 20 },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    like: 10,
  };
  state.profilePage.posts.push(newPost);
  renderIntiveTree(state);
};

export default state;
