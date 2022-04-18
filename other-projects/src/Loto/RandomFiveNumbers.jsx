import ArrOfNumbers from "./ArrOfNumbers";

export default function RandomFiveNumbers() {
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
  console.log(randoms([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

  return <div></div>;
}
