/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

function sumArray(arr) {
  let sum = 0;
  let sum2 = 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
      console.log(`counter: ${counter++}`);
    }
  }
  return sum + sum2;
}

console.time('Quadratic SumArray 1');
console.log(sumArray([1, 2, 3, 4, 5]));
console.timeEnd('Quadratic SumArray 1');

const arr2 = Array.from({ length: 100 }, (_, index) => index + 1);
console.time('Quadratic SumArray 2');
console.log(sumArray(arr2));
console.timeEnd('Quadratic SumArray 2');
