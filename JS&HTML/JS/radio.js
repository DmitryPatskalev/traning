let text = document.getElementById("text");
let button = document.getElementById("button");
let radios = document.querySelectorAll('input[type="radio"]');
button.addEventListener("click", function () {
  for (let radio of radios) {
    if (radio.checked) {
      text.innerHTML = radio.value;
    }
  }
});
