import {useState} from "react";
import css from "./Style.module.css";

export default function Buttons() {
    const [value, setValue] = useState([1, 2, 3]);
    const [par, setPar] = useState();


    let result = value.map((elem) => {
        return (
            <button key={elem} className={css.button}>
                {elem}
            </button>
        );
    });

    return <div>
        {result}
    </div>;
}
