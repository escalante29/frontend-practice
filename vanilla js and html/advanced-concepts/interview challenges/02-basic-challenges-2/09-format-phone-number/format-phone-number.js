/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(numbers) {
  const regex = /,/g;
  const area = numbers.slice(0, 3).toString().replace(regex, '');
  const prefix = numbers.slice(3, 6).toString().replace(regex, '');
  const lineNumber = numbers.slice(6).toString().replace(regex, '');
  return `(${area}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
