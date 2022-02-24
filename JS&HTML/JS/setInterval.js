let button = document.getElementById("button");
button.addEventListener("click", function func() {
  let i = 0;
  let count = setInterval(() => {
    console.log(i++);
    if (i > 10) {
      clearInterval(count);
    }
    this.removeEventListener("click", func);
  }, 500);
});
