/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  let largest = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  return largest;
}

module.exports = findMaxNumber;
