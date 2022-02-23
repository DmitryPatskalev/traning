let elem = document.getElementById("elem");
elem.style.color = "red";
let div = document.getElementById("div");
let button = document.getElementById("button");
button.addEventListener("click", function () {
  div.style.border = "solid";
  div.style.height = "100px";
  div.style.width = "300px";
  elem.style.fontSize = "30px";
  elem.style.color = "blue";
  div.style.borderRadius = "20px";
});
let button2 = document.getElementById("button2");
let elem2 = document.querySelectorAll(".text p");
for (let elems of elem2) {
  button2.addEventListener("click", function () {
    elems.classList.toggle("colored");
  });
}

let button3 = document.getElementById("button3");
let frame = document.getElementById("frame");
button3.addEventListener("click", function () {
  frame.classList.toggle("active");
});
