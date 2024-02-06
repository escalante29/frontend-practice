/**
 * Returns a map that represents the frequency of each word in the input string.
 * @param {string} str - The input string containing words.
 * @returns {Map<string, number>} - The map with word frequency.
 */
function wordFrequencyCounter(str) {
  // example string: The quick brown fox blah blah
  //   const words = str.toLowerCase().split(' ');
  const words = str.toLowerCase().split(/\W+/);
  const result = new Map();

  words.forEach((word) => {
    if (word === '') return;
    if (result.get(word)) {
      result.set(word, result.get(word) + 1);
    } else {
      result.set(word, 1);
    }
  });
  return result;
}

module.exports = wordFrequencyCounter;
