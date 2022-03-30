import Apple_Iphone13 from "./image/Apple_Iphone13.jpeg";
import Honor50 from "./image/Honor50.jpeg";
import Huawei_Nova9 from "./image/Huawei_Nova9.jpeg";
import Samsung_S21 from "./image/Samsung_S21.jpeg";
import Xiaomi_Redmi11S from "./image/Xiaomi_Redmi11S.jpeg";
import css from "./Style.module.css";
export default function Phone() {
  return (
    <div className={css.image}>
      <div className={css.title}>Мобильные телефоны</div>
      <div>
        <img src={Apple_Iphone13} />
      </div>
      <div>
        <img src={Honor50} />
      </div>
      <div>
        <img src={Huawei_Nova9} />
      </div>
      <div>
        <img src={Samsung_S21} />
      </div>
      <div>
        <img src={Xiaomi_Redmi11S} />
      </div>
    </div>
  );
}
