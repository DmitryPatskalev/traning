let click = document.getElementById("click");
let elems = document.querySelectorAll(".www");
click.addEventListener("click", function () {
  for (let elem of elems) {
    for (i = 1; i <= elems.length; i++) {
      elem.innerHTML += i;
    }
  }
});

let button = document.getElementById("button");
button.addEventListener("click", function () {
  let text = document.querySelectorAll(".text");
  for (let elem of text) {
    elem.value = "text";
  }
});

let button1 = document.getElementById("button1");
let p = document.getElementById("p");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

button1.addEventListener("click", function () {
  p.innerHTML = Number(num1.value) + Number(num2.value);
});
