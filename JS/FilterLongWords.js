function filterLongWords(sentence, n) {
  var newArr = [];
  var arr = sentence.split(" ");
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); //, ['quick', 'brown', 'jumps']);
