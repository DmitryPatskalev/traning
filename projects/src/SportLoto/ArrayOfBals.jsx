import RandomNumbers from "./RandomNumbers";
import {useState} from "react";
import css from "./Style.module.css";


export default function ArrayOfBalls() {
    let randoms = (arr, length) => {
        return first(shuffle(arr), length);
    };
    let first = (arr, length) => {
        return arr.slice(0, length);
    };
    let shuffle = (arr) => {
        let result = [];
        while (arr.length > 0) {
            let random = gerRandomInt(0, arr.length - 1);
            let elem = arr.splice(random, 1)[0];
            result.push(elem);
        }
        return result;
    };

    let gerRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let getArray = (numbers) => {
        let result = [];
        for (let i = 1; i <= numbers; i++) {
            result.push(i);
        }
        return result;
    };
    let list = (getArray(36))
    let loto = randoms(list, 5);

    let diffArr = (arr1, arr2) => {
        let result = [];
        for (let elem of arr1) {
            if (inArray(elem, arr2)) {
                result.push(elem);
            }
        }
        return result;
    };
    let inArray = (elem, arr) => {
        return arr.indexOf(elem) !== -1;
    };
    let myArr = [1, 9, 25, 19, 34];

    let getArr = diffArr(loto, myArr);

    const [value, setValue] = useState(loto)

    let randomResult = value.map((elem) => {
        return (
            <button key={elem} className={css.button}>
                {elem}
            </button>
        )
    });


    const [value2, setValue2] = useState(myArr)
    let myResult = value2.map((elem) => {
        return (
            <button key={elem} className={css.button2}>
                {elem}
            </button>
        )
    });

    let match = diffArr(getArr, myArr)
    // console.log(loto)
    // console.log(myArr)
    // console.log(diffArr(getArr, myArr))
    return <div>
        <p>
            {randomResult}
        </p>
        <p>
            Совпадений: {match.length}
        </p>

        <p>
            {myResult}
        </p>


    </div>;
}
