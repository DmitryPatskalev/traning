function oddity(n) {
  return Math.sqrt(n) % 1 == 0 ? "odd" : "even";
}

console.log(oddity(1)); //,'odd');
console.log(oddity(5)); //,'even');
console.log(oddity(12)); //,'even');
console.log(oddity(16)); //,'odd');
