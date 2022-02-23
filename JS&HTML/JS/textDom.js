let elem = document.getElementById("elem");
let button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log(elem.innerHTML);
});

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button1.addEventListener("click", function () {
  num1.innerHTML = "1";
});
button2.addEventListener("click", function () {
  num2.innerHTML = "2";
});
button3.addEventListener("click", function () {
  num3.innerHTML = "3";
});

let sqrt = document.getElementById("sqrt");
let buttonsqrt = document.getElementById("buttonsqrt");
buttonsqrt.addEventListener("click", function () {
  sqrt.innerHTML = Number(sqrt.innerHTML) * Number(sqrt.innerHTML);
});

let plus = document.getElementById("plus");
let buttonplus = document.getElementById("buttonplus");
buttonplus.addEventListener("click", function () {
  plus.innerHTML = "<b>HELLO</b>" + "!!!";
});
