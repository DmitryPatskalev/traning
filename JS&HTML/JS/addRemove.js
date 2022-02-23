let button = document.getElementById("button");
function func() {
  this.value++;
  if (this.value == 10) {
    this.removeEventListener("click", func);
  }
}
button.addEventListener("click", func);

let text = document.querySelectorAll(".text p");
for (let word of text) {
  word.addEventListener("click", func1);
  function func1() {
    this.innerHTML += "!";
    this.removeEventListener("click", func1);
  }
}
let value = button.getAttribute("value");
let value1 = button.getAttribute("type");
let value2 = button.hasAttribute("class");
console.log(value, value1, value2);
