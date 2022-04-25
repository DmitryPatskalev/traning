import {useState} from "react";

export default function ButtonShowHide() {
    const [value, setValue] = useState('')
    let elem;
    if (value) {
        elem = <p>TEXT</p>
    }

    return <div>
        <button onClick={() => setValue(!value)}>{elem ? 'HIDE' : 'SHOW'}</button>
        {elem}
    </div>
}