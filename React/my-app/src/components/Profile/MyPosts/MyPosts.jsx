import css from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="How is it going?" like="15" />
      <Post message="I am fine, thanks!" like="20" />
    </div>
  );
};
export default MyPosts;
