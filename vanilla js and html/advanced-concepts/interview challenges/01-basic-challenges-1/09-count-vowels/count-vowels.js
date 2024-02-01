/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  let totalVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str
    .toLowerCase()
    .split('')
    .map((char) => {
      if (vowels.includes(char)) {
        totalVowels++;
      }
    });
  return totalVowels;
}

module.exports = countVowels;
