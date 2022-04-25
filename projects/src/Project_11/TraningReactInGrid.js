import css from './style.module.css'
import ButtonShowHide from "./1_Button_Show_Hide";
import TextInput from "./2_Text_Input";
import AddToArr from "./3_AddToArr";
import GetSumOfInput from "./4_SumOfInput";
import CheckBox from "./5_CheckBox";
import GetSelect from "./6_Select";

export default function TraningReactInGrid() {
    return <div className={css.main}>
        <div className={css.odd}><ButtonShowHide/></div>
        <div className={css.even}><TextInput/></div>
        <div className={css.odd}><AddToArr/></div>
        <div className={css.even}><GetSumOfInput/></div>
        <div className={css.odd}><CheckBox/></div>
        <div className={css.even}><GetSelect/></div>
        <div className={css.odd}>7</div>
        <div className={css.even}>8</div>
        <div className={css.odd}>9</div>

    </div>
}