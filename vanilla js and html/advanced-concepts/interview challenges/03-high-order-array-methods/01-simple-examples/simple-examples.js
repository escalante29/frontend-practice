const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((x) => x * 2);

console.log(doubledNumbers);
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filteredNumbers = numbers.filter((e) => {
  return e % 2 === 0;
});

console.log(filteredNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce((res, cur) => {
  return res + cur;
}, 0);

console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => {
  //   console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const found = numbers.find((num) => {
  return num > 2;
});
console.log(found);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const some = numbers.some((x) => x % 2 === 0);
console.log(some);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const every = numbers.every((x) => x < 10);
console.log(every);
