import css from "./ProfileInfo.module.css";
import stadium from "./../../Photo/stadium.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={stadium} alt='stadium' />
      </div>
      <div className={css.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
