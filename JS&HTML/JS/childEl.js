let parent = document.getElementById("parent");

let firstChild = (parent.firstElementChild.style.color = "red");
let lastChild = (parent.lastElementChild.style.color = "green");

let elems = parent.children;
for (let elem of elems) {
  console.log((elem.innerHTML += "!"));
}

let p = document.getElementById("p");
id = p.parentElement.id;
console.log(id);

let elem = document.getElementById("elem");
let par = elem.parentElement.id;

let tag = document.getElementsByTagName("p");
for (let tags of tag) {
  tags.style.color = "green";
}

let classEl = document.getElementsByClassName("class");
for (let classElems of classEl) {
  classElems.style.fontSize = "40px";
}

let parents = document.getElementsByClassName("child");

console.log(parents);
