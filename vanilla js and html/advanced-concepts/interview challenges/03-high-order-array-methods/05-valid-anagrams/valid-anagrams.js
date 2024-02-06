/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1, str2) {
  const orderedStrArr1 = str1.split('').sort();
  const orderedStrArr2 = str2.split('').sort();

  return JSON.stringify(orderedStrArr1) === JSON.stringify(orderedStrArr2);
}

module.exports = validAnagrams;
