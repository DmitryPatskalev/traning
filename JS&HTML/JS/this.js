let elem = document.getElementById("elem");
elem.addEventListener("blur", function () {
  this.value = "!!!";
});
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function func() {
  console.log(this.value);
}
button1.addEventListener("click", func);
button2.addEventListener("dblclick", func);
button3.addEventListener("mouseout", func);

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

function func1() {
  this.innerHTML = this.innerHTML + "!";
}
p1.addEventListener("click", func1);
p2.addEventListener("click", func1);
p3.addEventListener("click", func1);
p4.addEventListener("click", func1);
p5.addEventListener("click", func1);

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

function func2() {
  this.value = Number(this.value) ** 2;
}
num1.addEventListener("mouseout", func2);
num2.addEventListener("mouseout", func2);
num3.addEventListener("mouseout", func2);
