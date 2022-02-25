let start = document.getElementById("start");
let stop = document.getElementById("stop");
let time = document.getElementById("time");

let inter;
start.addEventListener("click", function () {
  inter = setInterval(function () {
    let date = new Date();
    time.value =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, 500);
  stop.addEventListener("click", function () {
    clearInterval(inter);
  });
});

let elem1 = document.getElementById("elem1");
let elem2 = document.getElementById("elem2");
let elem3 = document.getElementById("elem3");
let button = document.getElementById("button");
button.addEventListener("click", function () {
  let i = 1;
  let timer = setInterval(function () {
    elem3.value = Number(elem1.value) - Number(elem2.value);
    elem1.value -= i;
    if (elem3.value == -10) {
      clearInterval(timer);
    }
  }, 500);
});
