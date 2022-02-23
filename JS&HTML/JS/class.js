let elem = document.getElementById("elem");
let button = document.getElementById("button");
button.addEventListener("click", function () {
  var result = [];
  var arr = elem.className.split("");
  for (let elem of arr) {
    result.push(elem);
  }
  return result;
});
