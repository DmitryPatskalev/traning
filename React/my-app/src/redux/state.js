let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      like: 10,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(obserber) {
    this._callSubscriber = obserber;
  },
};
// window.store = store;
export default store;
