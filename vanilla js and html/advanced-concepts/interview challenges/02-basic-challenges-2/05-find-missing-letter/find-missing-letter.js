/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */

// naive approach
// function findMissingLetter(arr) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   let subarray;

//   alphabet.split('').forEach((letter, idx, myArray) => {
//     if (arr[0] === letter) {
//       subarray = myArray.slice(idx, idx + arr.length);
//     }
//   });

//   return subarray.filter((letter) => !arr.includes(letter))[0];
// }

// better with indexOf
function findMissingLetter(arr) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (alphabet[startIndex + i] !== arr[i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}

module.exports = findMissingLetter;
