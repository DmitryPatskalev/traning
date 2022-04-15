import ArrayOfBalls from "./ArrayOfBals";
import Buttons from "./Button";
import css from './Style.module.css'

export default function Sportloto() {
    return <div className={css.body}>
        <ArrayOfBalls/>
        {/*<Buttons/>*/}
    </div>
}