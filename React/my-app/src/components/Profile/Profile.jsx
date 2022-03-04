import MyPosts from "./MyPosts/MyPosts";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.content}>
      <div className={css.stadion}>
        <img src="https://media.gettyimages.com/photos/jun-1996-general-aerial-view-of-old-trafford-before-the-european-c-picture-id943836?s=612x612" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
