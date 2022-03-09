import css from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  const postDate = [
    { id: 1, message: "How is it going?", like: 15 },
    { id: 2, message: "I am fine, thanks!", like: 20 },
  ];
  let postsElements = postDate.map((posts) => (
    <Post message={posts.message} like={posts.like} />
  ));

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
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
