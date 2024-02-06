/**
 * Returns an array containing the symmetric difference of two arrays.
 * @param {number[]} arr1 - The first array of integers.
 * @param {number[]} arr2 - The second array of integers.
 * @returns {number[]} - The array containing the symmetric difference of the two arrays.
 */
function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];
  for (const elem of set1) {
    if (!set2.has(elem)) {
      result.push(elem);
    }
  }
  for (const elem of set2) {
    if (!set1.has(elem)) {
      result.push(elem);
    }
  }
  return result;
}

module.exports = symmetricDifference;
