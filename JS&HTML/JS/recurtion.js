let pow = (x, y) => {
  if (y === 0) return 1;
  return x * pow(x, y - 1);
};
console.log(pow(3, 4));
