/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
const isValidIPv4 = (input) => {
  const inputArray = input.split('.');
  if (inputArray.length !== 4) return false;
  return inputArray.every((input) => {
    return input.charAt(0) != 0 && Number(input) <= 255;
  });
};

module.exports = isValidIPv4;
