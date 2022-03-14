import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.message} like={posts.like} />
  ));

  let newPostElement = React.useRef();
  let postAdd = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder="Write a message"
            ref={newPostElement}
          ></textarea>
        </div>
        <div>
          <button onClick={postAdd}>Add post</button>
        </div>
      </div>
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
