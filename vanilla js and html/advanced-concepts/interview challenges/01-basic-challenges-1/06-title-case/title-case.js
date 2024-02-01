/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
// function titleCase(str) {
//   let capitalized = '';
//   const words = str.split(' ');
//   words.forEach((word, idx, arr) => {
//     capitalized +=
//       word.charAt(0).toUpperCase() +
//       word.substring(1, word.length).toLowerCase() +
//       ' ';
//   });
//   return capitalized.trimEnd();
// }

function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  return words
    .map((word) => {
      return (word = word[0].toUpperCase() + word.slice(1));
    })
    .join(' ');
}

module.exports = titleCase;
