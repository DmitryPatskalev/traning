let elems = document.getElementsByClassName("elem");
for (let elem of elems) {
  elem.addEventListener("click", function () {
    button1.value++;
    button2.value--;
  });
}
