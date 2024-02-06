/**
 * Returns an array of arrays, where each sub-array contains words that are anagrams of each other.
 * @param {string[]} words - The input array of strings containing words.
 * @returns {string[][]} - The array of arrays with anagram groups.
 */
function anagramGrouping(words) {
  const groups = new Map();

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (groups.has(sortedWord)) {
      // naive approach
      // const currentWords = groups.get(sortedWord);
      // groups.set(sortedWord, [...currentWords, word]);
      // better approach
      groups.get(sortedWord).push(word);
    } else {
      groups.set(sortedWord, [word]);
    }
  }

  return Array.from(groups.values());
}

module.exports = anagramGrouping;
