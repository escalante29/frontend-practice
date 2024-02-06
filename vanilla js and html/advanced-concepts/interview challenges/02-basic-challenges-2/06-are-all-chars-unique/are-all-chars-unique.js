/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str) {
  const stringArray = str.split('');
  return Array.from(new Set(stringArray)).length === stringArray.length;
}

module.exports = areAllCharactersUnique;
