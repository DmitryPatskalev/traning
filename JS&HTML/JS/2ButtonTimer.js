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
    if (elem3.value == 0) {
      clearInterval(timer);
    }
  }, 500);
});

let button2 = document.addEventListener("click", function () {
  let stop = setInterval(function () {
    text.innerHTML++;
    if (text.innerHTML >= 10) {
      clearInterval(stop);
    }
  }, 500);
});

let sqrt = document.getElementById("sqrt");
sqrt.addEventListener("mouseout", function () {
  setInterval(() => {
    this.value *= 2;
  }, 1000);
});

let text2 = document.getElementById("text2");
text2.addEventListener("mouseout", function () {
  let time = setInterval(() => {
    this.value -= 1;
    if (this.value == 0) {
      clearInterval(time);
    }
  }, 500);
});
let par = document.getElementById("par");
par.addEventListener("click", function () {
  let i = 0;
  setInterval(() => {
    if (i % 2 == 0) {
      par.style.color = "red";
    } else {
      par.style.color = "green";
    }
    i++;
  }, 1000);
});
