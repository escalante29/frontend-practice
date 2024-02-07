const HashTable = require('./HashTable');
/**
 * Returns the number of instances of the specified word in the input string.
 * @param {string} str - The input string containing words.
 * @param {string} word - The word to count instances of.
 * @returns {number} - The number of instances of the specified word.
 */
function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFrequency = new HashTable();
  const targetWord = word.toLowerCase();
  let count = 0;

  for (const currentWord of words) {
    if (currentWord === '') continue;

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFrequency.get(currentWord);
    }
  }

  return count;
}

module.exports = wordInstanceCounter;
