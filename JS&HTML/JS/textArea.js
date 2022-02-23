let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let elem = document.getElementById("elem");
button.addEventListener("click", function () {
  elem.disabled = true;
});
button2.addEventListener("click", function () {
  elem.disabled = false;
});

let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
button3.addEventListener("click", function () {
  cbox.checked = true;
});
button4.addEventListener("click", function () {
  cbox.checked = false;
});

let button5 = document.getElementById("button5");
let par = document.getElementById("par");
let cbox2 = document.getElementById("cbox2");
button5.addEventListener("click", function () {
  if (cbox2.checked == true) {
    par.innerHTML = "Hello!";
  }
  if (cbox2.checked == false) {
    par.innerHTML = "Good Buy!";
  }
});
let elem2 = document.getElementById("elem2");
let button6 = document.getElementById("button6");
button6.addEventListener("click", function () {
  elem2.disabled = !elem2.disabled;
});
let button7 = document.getElementById("button7");
let cbox3 = document.getElementById("cbox3");
button7.addEventListener("click", function () {
  cbox3.checked = !cbox3.checked;
});
