function vowelIndices(word) {
  var newArr = [];
  var string = word.toLowerCase();
  var string2 = string.split("");
  var arr = ["a", "e", "i", "o", "u", "y"];
  for (i = 0; i < string2.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (string2[i] === arr[j]) {
        newArr.push(i + 1);
      }
    }
  }
  return newArr;
}

console.log(vowelIndices("mmm")); //, []);
console.log(vowelIndices("apple")); //, [1,5]);
console.log(vowelIndices("super")); //, [2,4]);
console.log(vowelIndices("orange")); //, [1,3,6]);
console.log(vowelIndices("supercalifragilisticexpialidocious")); //, [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
console.log(vowelIndices("AAA")); //, [1,2,3]);
