import {useState} from "react";
import css from './../style.module.css'

export default function Setting() {

    let randoms = (arr, length) => {
        return first(shuffle(arr), length)
    }
    let first = (arr, length) => {
        return arr.slice(0, length)
    }
    let shuffle = (arr) => {
        let result = []
        while (arr.length > 0) {
            let random = getRandom(0, arr.length - 1)
            let elem = arr.splice(random, 1)[0]
            result.push(elem)
        }
        return result
    }
    let getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let arrOfNumbers = (num) => {
        let result = []
        for (let i = 1; i <= num; i++) {
            result.push(i)
        }
        return result
    }
    let fiveNumbers = arrOfNumbers(36)



    let arrFiveNumbers = randoms(fiveNumbers, 5)
    let getAnyArr = (arr) => {
        return arr
    }

    const [value, setValue] = useState(arrFiveNumbers)
    let getResult = value.map(elem => {
        return <button className={css.button} key={elem}>{elem}</button>
    })
    return <div>
        <div>
            <button onClick={() => setValue(getAnyArr(arrFiveNumbers))}>ADD</button>
            {getResult}


        </div>
    </div>
}