import css from "./style.module.css";

export default function ArrOfNumbers() {
  let getFiveNumbers = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  };

  let list = getFiveNumbers(36);

  let randoms = (arr, length) => {
    return first(shuffle(arr), length);
  };
  let first = (arr, length) => {
    return arr.slice(0, length);
  };
  let shuffle = (arr) => {
    let result = [];
    while (arr.length > 0) {
      let random = getRandomNumber(0, arr.length - 1);
      let elem = arr.splice(random, 1)[0];
      result.push(elem);
    }
    return result;
  };
  let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let randomNumbers = randoms(list, 5);
  let arrOfBalls = randomNumbers.map((elem) => {
    return (
      <button className={css.buttonUp} key={elem}>
        {elem}
      </button>
    );
  });
  let list2 = getFiveNumbers(36);
  let randomNumbers2 = randoms(list2, 5);
  let arrOfBalls2 = randomNumbers2.map((elem) => {
    return (
      <button className={css.buttonDown} key={elem}>
        {elem}
      </button>
    );
  });
  let similarNumbers = (arr1, arr2) => {
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

  let similarNum = similarNumbers(randomNumbers, randomNumbers2);
  let similarNumOfArr = similarNum.map((elem) => {
    return (
      <button className={css.button} key={elem}>
        {elem}
      </button>
    );
  });

  return (
    <div>
      <h1 className={css.h1}>СПОРТ ЛОТО 5 из 36</h1>
      <div>
        <span className={css.span}>5 случайных цифр из 36:</span>
        {arrOfBalls}
      </div>
      <div>
        <span className={css.span}>Цифры которые совпали:</span>
        {similarNumOfArr}
      </div>
      <div>
        <span className={css.span}>5 случайных цифр игрока:</span>
        {arrOfBalls2}
      </div>
    </div>
  );
}
