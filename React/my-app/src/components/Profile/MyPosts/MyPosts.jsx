import css from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  const MyPost = [
    { id: 1, message: "How is it going?", like: 15 },
    { id: 2, message: "I am fine, thanks!", like: 20 },
  ];
  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        <Post message={MyPost[0].message} like={MyPost[0].like} />
        <Post message={MyPost[1].message} like={MyPost[1].like} />
      </div>
    </div>
  );
};
export default MyPosts;
