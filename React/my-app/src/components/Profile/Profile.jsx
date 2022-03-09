import MyPosts from "./MyPosts/MyPosts";
import css from "./Profile.module.css";
import stadium from "./../Photo/stadium.jpg";

const Profile = () => {
  return (
    <div className={css.stadium}>
      <img src={stadium} />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
