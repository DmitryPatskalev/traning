import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "./../../../redux/profile-reducer";
const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.message} like={posts.like} />
  ));

  let newPostElement = React.useRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
