function func() {
  console.log("!!!");
}
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
button1.addEventListener("click", func);
button2.addEventListener("dblclick", func);

function func2() {
  console.log("message");
}

let elem1 = document.getElementById("elem1");
let elem2 = document.getElementById("elem2");
let elem3 = document.getElementById("elem3");
let elem4 = document.getElementById("elem4");
let elem5 = document.getElementById("elem5");

elem1.addEventListener("mouseover", func2);
elem2.addEventListener("mouseover", func2);
elem3.addEventListener("mouseover", func2);
elem4.addEventListener("mouseover", func2);
elem5.addEventListener("mouseover", func2);

var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
  console.log("23");
});
button4.addEventListener("click", function () {
  console.log("25");
});

function func3() {
  console.log("text1");
}
function func4() {
  console.log("text2");
}
function func5() {
  console.log("text3");
}

let text6 = document.getElementById("text6");
text6.addEventListener("mouseover", func3);

text6.addEventListener("mouseover", func4);

text6.addEventListener("mouseover", func5);
