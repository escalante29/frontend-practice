/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n ** 2)
    .reduce((res, cur) => res + cur, 0);
}

// console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6, 8]));

module.exports = sumOfEvenSquares;
