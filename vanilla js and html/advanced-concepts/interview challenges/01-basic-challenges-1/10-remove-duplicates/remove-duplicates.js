/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
// function removeDuplicates(arr) {
//   const set = new Set(arr);
//   return Array.from(set);
// }

function removeDuplicates(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[i];
  }
  return Object.values(result);
}

module.exports = removeDuplicates;
