let check = document.getElementById("check");
let par = document.getElementById("par");
let elem = document.getElementById("elem");
elem.addEventListener("change", function () {
  par.innerHTML = elem.value;
});
check.addEventListener("change", function () {
  if (check.checked) {
    console.log("Turned on");
  } else {
    console.log("Turned off");
  }
});
let par2 = document.getElementById("par2");
let elem2 = document.getElementById("elem2");
elem2.addEventListener("input", function () {
  let sum = 5;
  if (elem2.value.length) {
    par2.innerHTML = sum - elem2.value.length;
  }
  if (elem2.value.length > 5) {
    par2.innerHTML = elem2.value.length - sum;
  }
});
let par3 = document.getElementById("par3");
let par4 = document.getElementById("par4");

let button = document.getElementById("button");
button.addEventListener("click", function () {
  par3.focus();
});

let select = document.getElementById("select");
let button2 = document.getElementById("button2");
let par5 = document.getElementById("par5");
button2.addEventListener("click", function () {
  par5.innerHTML = select.value;
});
let select2 = document.getElementById("select2");
select2.addEventListener("change", function () {
  if (this.value == 2024 || this.value == 2028) {
    console.log("High Year");
  }
});
let select3 = document.getElementById("select3");
select3.addEventListener("change", function () {
  if (this.value == 6 || this.value == 7) {
    console.log("Weekend");
  }
});

let button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  console.log(select3.selectedIndex);
});
let inp = document.getElementById("inp");
inp.addEventListener("mouseout", function () {
  select3.value = inp.value;
});
