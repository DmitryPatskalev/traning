let button = document.getElementById("button");
button.addEventListener("click", func);
button.addEventListener("mouseout", func1);

function func(event) {
  event = button.style.background = "red";
}
function func1(event) {
  event = button.style.background = "green";
}

let elem = document.getElementById("elem");
elem.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(this);
});

let button2 = document.getElementById("button2");
button2.addEventListener("click", function (event) {
  if (event.ctrlKey) {
    button2.style.background = "red";
  }
  if (event.altKey) {
    button2.style.background = "green";
  }
  if (event.shiftKey) {
    button2.style.background = "blue";
  }
});
let list = document.querySelectorAll("#list");
for (let li of list) {
  li.addEventListener("click", function (event) {
    if (event.shiftKey) {
      li.innerHTML += "!";
    }
  });
}

let link = document.getElementById("link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  link.innerHTML += " https://www.google.by/";
});
let par = document.getElementById("par");
let link2 = document.getElementById("link2");
link2.addEventListener("click", function (event) {
  event.preventDefault();
  par.innerHTML = Number(elem2.value) + Number(elem3.value);
});
