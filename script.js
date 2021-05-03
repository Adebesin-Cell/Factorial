const getFactorial = function (number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  for (let i = number - 1; i >= 1; i--) {
    number = number * i;
  }
  return number;
};
console.log(getFactorial(10));
getFactorial(67);
const recursiveFactorial = (number) => {
  if (number === 1 || number === 0) {
    return 1;
  }
  fact = recursiveFactorial(number - 1) * number;
  return fact;
};

console.log(recursiveFactorial(5));
