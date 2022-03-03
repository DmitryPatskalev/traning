import s from "./../CSS/Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://media.gettyimages.com/photos/jun-1996-general-aerial-view-of-old-trafford-before-the-european-c-picture-id943836?s=612x612" />
      </div>
      <div>ava + description</div>
      <div className={s.posts}>
        My posts
        <div>New posts</div>
        <div className={s.item}>
          <div>Post1</div>
        </div>
        <div className={s.item}>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
