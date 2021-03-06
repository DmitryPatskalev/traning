import {useState} from "react";
import css from "./Style.module.css";
import ArrayOfNumbers from "./ArrayOfNumbers";
import MyNumbers from "./MyNumbers";


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
    let arrayOfnumbers = getArray(36)
    let myNum = [8, 30, 15, 3, 27]
    let randomFiveNumbers = randoms(arrayOfnumbers, 5)


    const [value, setValue] = useState(randomFiveNumbers);
    let result = value.map((elem) => {
        return (
            <button key={elem} className={css.button}>
                {elem}
            </button>
        );
    });

    const [myNumbers, setMyNumbers] = useState(myNum);
    let myarr = myNumbers.map((elem) => {
        return (
            <button key={elem} className={css.button2}>
                {elem}
            </button>
        );
    });

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

    let similarNumbers = diffArr(randomFiveNumbers, myNumbers)
    const [value3, setValue3] = useState(similarNumbers);
    let similarArr = value3.map((elem) => {
        return (
            <button key={elem} className={css.button3}>
                {elem}
            </button>
        );
    });


    return <div>


        <h1 className={css.h1}> ?????????? ???????? 5 ???? 36</h1>

        <p>
            <span className={css.span}>5 ?????????????????? ???????? ???? 36 =></span>
            {result}

        </p>
        <p>
            <span className={css.span}>???????????? ?????????????? ??????????????:</span>
            {similarArr}
        </p>
        <p>
            <span className={css.span}>???????? 5 ???????? =></span>
            {myarr}

        </p>


    </div>;
}
