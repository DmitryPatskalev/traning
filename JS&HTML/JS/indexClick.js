let button = document.querySelector("#button");
button.addEventListener("click", function () {
  console.log("!!!");
});
let button1 = document.querySelector("#button1");
button1.addEventListener("dblclick", function () {
  console.log("Нажал два раза на кнопку");
});
let button2 = document.querySelector("#button2");
button2.addEventListener("mouseover", function () {
  console.log("Навел мышкой на кнопку");
});
let button3 = document.querySelector("#button3");
button3.addEventListener("mouseout", function () {
  console.log("Увел курсор с кнопки");
});
let button4 = document.querySelector("#button4");
button4.addEventListener("mouseover", function () {
  console.log("Навел мышкой на кнопку");
});
button4.addEventListener("mouseout", function () {
  console.log("Увел курсор с кнопки");
});

let button5 = document.querySelector("#button5");
button5.addEventListener("click", func);
function func() {
  console.log("Именованый обработчик событий");
}

let buttonL = document.querySelector("#buttonL");
buttonL.addEventListener("dblclick", func1);
function func1() {
  console.log("Left Button");
}
let buttonR = document.querySelector("#buttonR");
buttonR.addEventListener("dblclick", func2);
function func2() {
  console.log("Right Button");
}
