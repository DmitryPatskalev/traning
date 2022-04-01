import css from "./logo.module.css";
import appleLogo from "./ImageLogo/AppleLogo.jpg";
import samsungLogo from "./ImageLogo/SamsungLogo.jpg";
import xiaomiLogo from "./ImageLogo/XiaomiLogo.jpg";
import huaweiLogo from "./ImageLogo/HuaweiLogo.jpg";
import honorLogo from "./ImageLogo/HonorLogo.jpg";
export default function Logo() {
  return (
    <div>
      <div className={css.logo}>
        <div>
          <img className={css.apple} src={appleLogo} />
        </div>
        <div>
          <img className={css.samsung} src={samsungLogo} />
        </div>
        <div>
          <img className={css.xiaomi} src={xiaomiLogo} />
        </div>
        <div className={css.logo2}>
          <div>
            <img className={css.huawei} src={huaweiLogo} />
          </div>
          <div>
            <img className={css.honor} src={honorLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}
