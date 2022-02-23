let button = document.getElementById("button");
button.addEventListener("click", func);
function func() {
  this.value++;
  if (this.value == 10) {
    this.removeEventListener("click", func);
  }
}

let elems = document.querySelectorAll("p");
for (let elem of elems) {
  elem.addEventListener("click", function func1() {
    this.innerHTML += "!";
    this.removeEventListener("click", func1);
  });
}
