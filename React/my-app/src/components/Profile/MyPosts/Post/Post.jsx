import css from "./Post.module.css";

const Post = () => {
  return (
    <div className={css.item}>
      <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/250px-Manchester_United_FC_crest.svg.png" />
      Post1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
export default Post;
