import {useState} from "react";

export default function GetSumOfInput() {
    const [value, setValue] = useState([])
    let getSum = (arr) => {
        let sum = 0
        for (let elem of arr) {
            sum += Number(elem)
        }
        return sum
    }

    function changeHundler(index, event) {
        setValue([
            ...value.slice(0, index),
            event.target.value,
            ...value.slice(0, index + 1)
        ])
    }

    return <div>
        Input the numbers in 'INPUT'
        <p><input value={value[0]} onChange={(event) => changeHundler(0, event)}/></p>
        <p><input value={value[1]} onChange={(event) => changeHundler(1, event)}/></p>
        <p><input value={value[2]} onChange={(event) => changeHundler(2, event)}/></p>
        <p>{getSum(value)}</p>
    </div>
}