import css from "./phone.module.css";
import samsung from "./../../Image/Samsung_S21.jpeg";
import iphone from "./../../Image/Apple_Iphone13.jpeg";
import honor from "./../../Image/Honor50.jpeg";
import huawei from "./../../Image/Huawei_Nova9.jpeg";
import xiaomi from "./../../Image/Xiaomi_Redmi11S.jpeg";
import Characteristic from "./Characteristics";

export default function PhoneGalery() {
  return (
    <div className={css.mobileImage}>
      <div>
        <img src={samsung} title="Samsung_S21" />
        <span className={css.nameItem}>Samsung_S21</span>
        <Characteristic />
      </div>
      <div>
        <img src={iphone} title="Apple_Iphone13" />
        <span className={css.nameItem}>Apple_Iphone13</span>
        <Characteristic />
      </div>
      <div>
        <img src={honor} title="Honor50" />
        <span className={css.nameItem}>Honor50</span>
        <Characteristic />
      </div>
      <div>
        <img src={huawei} title="Huawei_Nova9" />
        <span className={css.nameItem}>Huawei_Nova9</span>
        <Characteristic />
      </div>
      <div>
        <img src={xiaomi} title="Xiaomi_Redmi11S" />
        <span className={css.nameItem}>Xiaomi_Redmi11S</span>
        <Characteristic />
      </div>
    </div>
  );
}
