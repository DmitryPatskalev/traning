function confirmEnding(str, target) {
  var getStr = str.substring(str.length - target.length);
  if (getStr === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Congratulation", "on")); //true
console.log(confirmEnding("Bastian", "n")); //true
console.log(confirmEnding("Open sesame", "sage")); //false
