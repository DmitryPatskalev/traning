import css from "./phone.module.css";
import samsung from "./../../Image/Samsung_S21.jpeg";
import iphone from "./../../Image/Apple_Iphone13.jpeg";
import honor from "./../../Image/Honor50.jpeg";
import huawei from "./../../Image/Huawei_Nova9.jpeg";
import xiaomi from "./../../Image/Xiaomi_Redmi_Note11.jpeg";
import Characteristic from "./Characteristics";

export default function PhoneGalery() {
  return (
    <div className={css.mobileImage}>
      <div>
        <img src={samsung} title="Samsung S21" />
        <span className={css.nameItem}>Samsung_S21</span>
        <Characteristic
          os="Android"
          screen='6.2" AMOLED (1080x2400)'
          processor="Exynos 2100 (2900 МГц)"
          storage="256ГБ (UFS 3.1)"
          battery="4000 мА·ч"
        />
      </div>
      <div>
        <img src={iphone} title="Apple Iphone13" />
        <span className={css.nameItem}>Apple_Iphone13</span>
        <Characteristic
          os="Apple iOS"
          screen='6.1" OLED(Super Retina XDR)(1170x2532)'
          processor="Apple A15 Bionic"
          storage="128 ГБ"
          battery="3000 мА·ч"
        />
      </div>
      <div>
        <img src={honor} title="Honor 50" />
        <span className={css.nameItem}>Honor50</span>
        <Characteristic
          os="Android 11(Magic UI 4.2)"
          screen='6.57" OLED  (1080x2340)'
          processor="Qualcomm Snapdragon 778G(2400 МГц)"
          storage="126Гб"
          battery="4300 мА·ч"
        />
      </div>
      <div>
        <img src={huawei} title="Huawei Nova9" />
        <span className={css.nameItem}>Huawei_Nova9</span>
        <Characteristic
          os="Android 11 (EMUI 12)"
          screen='6.57" OLED (1080x2340)'
          processor="Qualcomm Snapdragon 778G(2400 МГц)"
          storage="128ГБ"
          battery="4300 мА·ч"
        />
      </div>
      <div>
        <img src={xiaomi} title="Xiaomi Redmi Note11" />
        <span className={css.nameItem}>Xiaomi Note11</span>
        <Characteristic
          os="Android 11 (MIUI 13) "
          screen='6.43" AMOLED (1080x2400)'
          processor="Qualcomm Snapdragon 680 (2400 МГц)"
          storage="128 ГБ (UFS2.2) "
          battery="5000 мА·ч"
        />
      </div>
    </div>
  );
}
