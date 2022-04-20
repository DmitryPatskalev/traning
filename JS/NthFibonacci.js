function nthFibo(n) {
  var arr = [];
  var a = -1;
  var b = 1;
  for (let i = 1; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
    arr.push(b);
  }
  return arr[arr.length - 1];
}

console.log(nthFibo(1)); //, 0,"1-st Fibo");
console.log(nthFibo(2)); //, 1,"2-nd Fibo");
console.log(nthFibo(3)); //, 1,"3-rd Fibo");
console.log(nthFibo(4)); //, 2,"4-th Fibo");
console.log(nthFibo(5)); //, 3,"5-th Fibo");
console.log(nthFibo(6)); //, 5,"6-th Fibo");
console.log(nthFibo(9)); //, 21,"9-th Fibo");
console.log(nthFibo(10)); //, 34,"10-th Fibo");
