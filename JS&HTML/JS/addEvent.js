let elems = document.querySelectorAll("div");

for (let elem of elems) {
  elem.addEventListener("click", function () {
    this.innerHTML = Number(elem.innerHTML) ** 3;
  });
}
