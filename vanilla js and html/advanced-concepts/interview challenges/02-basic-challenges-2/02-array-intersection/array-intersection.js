/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1, arr2) {
  let result = [];
  let big, small;

  if (arr1.length >= arr2.length) {
    big = new Set(arr1);
    small = arr2;
  } else {
    big = new Set(arr2);
    small = arr1;
  }

  for (let i = 0; i < small.length; i++) {
    if (big.has(small[i])) {
      result.push(small[i]);
    }
  }

  return result;
}

module.exports = arrayIntersection;
