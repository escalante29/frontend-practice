/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str) {
  const repeated = {};

  str.split('').forEach((char) => {
    repeated[char] = (repeated[char] || 0) + 1;
  });

  const allNonRepeating = Object.keys(repeated).filter((key) => {
    return repeated[key] === 1;
  });

  return allNonRepeating[0] || null;
}

module.exports = findFirstNonRepeatingCharacter;
