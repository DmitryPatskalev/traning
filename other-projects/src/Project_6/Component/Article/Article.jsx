import css from "./article.module.css";
import samsung from "./../Image/Samsung_S21.jpeg";
import iphone from "./../Image/Apple_Iphone13.jpeg";
import honor from "./../Image/Honor50.jpeg";
import huawei from "./../Image/Huawei_Nova9.jpeg";
import xiaomi from "./../Image/Xiaomi_Redmi11S.jpeg";

export default function Article() {
  return (
    <div className={css.mobileImage}>
      <img src={samsung} title="Samsung_S21" />
      <img src={iphone} title="Apple_Iphone13" />
      <img src={honor} title="Honor50" />
      <img src={huawei} title="Huawei_Nova9" />
      <img src={xiaomi} title="Xiaomi_Redmi11S" />
    </div>
  );
}
