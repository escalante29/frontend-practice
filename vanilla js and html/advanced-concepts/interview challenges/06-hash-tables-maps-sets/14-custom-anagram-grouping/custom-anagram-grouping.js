const HashTable = require('./HashTable');

/**
 * Groups anagrams from the input array of words using a HashTable.
 * @param {string[]} words - An array of words.
 * @returns {string[][]} - An array of arrays, each representing a group of anagrams.
 */
function anagramGrouping(words) {
  const myHashTable = new HashTable();
  for (word of words) {
    const sorted = word.split('').sort().join();
    if (myHashTable.has(sorted)) {
      myHashTable.get(sorted).push(word);
    } else {
      myHashTable.set(sorted, [word]);
    }
  }
  return myHashTable.getValues();
}

module.exports = anagramGrouping;
