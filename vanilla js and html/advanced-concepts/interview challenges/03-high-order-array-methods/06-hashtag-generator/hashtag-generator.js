/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str) {
  const trimmed = str.trim();
  if (trimmed.length == 0 || trimmed.length >= 140) return false;
  const words = trimmed.split(' ').map(capitalizeFirstLetter);
  return '#' + words.join('');
}

/**
 *
 * @param {string} - any word
 * @returns {string} - same word but capitalized
 */
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

module.exports = generateHashtag;
