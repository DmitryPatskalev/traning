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


    let myNumbers = <MyNumbers/>
    let arrayOfNumbers = <ArrayOfNumbers/>
    let randomNumbers = randoms(arrayOfNumbers, 5)

    return <div>

        {myNumbers}
        {arrayOfNumbers}
        {randoms}

    </div>;
}
