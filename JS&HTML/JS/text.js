let button = document.getElementById("button");
let elem1 = document.getElementById("elem1");
let elem2 = document.getElementById("elem2");
let elem3 = document.getElementById("elem3");
let elem4 = document.getElementById("elem4");
let elem5 = document.getElementById("elem5");
let par = document.getElementById("par");
button.addEventListener("click", function () {
  par.innerHTML =
    (Number(elem1.value) +
      Number(elem2.value) +
      Number(elem3.value) +
      Number(elem4.value) +
      Number(elem5.value)) /
    5;
});
let text = document.getElementById("text");
text.addEventListener("focus", function () {
  text.value = "Hello!";
});
text.addEventListener("blur", function () {
  text.value = "Good Buy!";
});
