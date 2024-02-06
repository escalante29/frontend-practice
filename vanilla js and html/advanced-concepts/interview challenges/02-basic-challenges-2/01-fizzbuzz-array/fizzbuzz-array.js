/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num) {
  let results = [];
  for (let i = 1; i <= num; i++) {
    let result = i;
    if (i % 3 === 0 && i % 5 === 0) {
      result = 'FizzBuzz';
    } else if (i % 3 === 0) {
      result = 'Fizz';
    } else if (i % 5 === 0) {
      result = 'Buzz';
    }
    results.push(result);
  }
  return results;
}

module.exports = fizzBuzzArray;
