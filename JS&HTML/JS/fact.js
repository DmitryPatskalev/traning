let button = document.getElementById("button");
let elem = document.getElementById("elem");

button.addEventListener("click", function () {
  p.innerHTML = fact(elem.value);
});
function fact(num) {
  let sum = 1;
  for (i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}
