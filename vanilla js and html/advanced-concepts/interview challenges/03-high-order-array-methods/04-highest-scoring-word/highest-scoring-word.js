/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str) {
  const words = str.split(' ');
  let highest = 0;
  let wordName = '';
  words.forEach((w) => {
    const chars = w.split('');
    let wordSize = chars.reduce((result, char) => {
      return result + (char.charCodeAt() - 97);
    }, 0);
    if (wordSize > highest) {
      highest = wordSize;
      wordName = w;
    }
  });

  return wordName;
}

module.exports = highestScoringWord;
