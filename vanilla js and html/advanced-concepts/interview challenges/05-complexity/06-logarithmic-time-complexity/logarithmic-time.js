/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

function findPower(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent % 2 === 0) {
    const halfPow = findPower(base, exponent / 2);
    return halfPow * halfPow;
  } else {
    const halfPow = findPower(base, (exponent - 1) / 2);
    return base * halfPow * halfPow;
  }
}

console.time('Logaritmic Power 1');
console.log(findPower(2, 100));
console.timeEnd('Logaritmic Power 1');

console.time('Logaritmic Power 1');
console.log(findPower(2, 1000000000));
console.timeEnd('Logaritmic Power 1');
