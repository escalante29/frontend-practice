/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */

// naive approach
// function reverseString(str) {
//   let len = str.length;
//   if (len === 0) {
//     return '';
//   }
//   len--;

//   return str[len] + reverseString(str.substring(0, len));
// }

// h,e,l,l,o -> h
// e,l,l,o -> e
// l,l,o -> l
// l,o -> l
// o -> o
// ''

// more optimized approach
function reverseString(str) {
  if (str === '') {
    return '';
  }

  return reverseString(str.substring(1)) + str[0];
}

module.exports = reverseString;
