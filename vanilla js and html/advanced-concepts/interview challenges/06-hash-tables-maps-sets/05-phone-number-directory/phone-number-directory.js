/**
 * Builds a phone number directory from an array of phone numbers.
 *
 * @param {string[]} phoneNumbers - An array of phone numbers in the format "Name:PhoneNumber".
 * @returns {Map<string, string>} - A Map with names as keys and corresponding phone numbers as values.
 */
function phoneNumberDirectory(phoneNumbers) {
  const result = new Map();
  // phoneNumbers.forEach((num) => {
  //   const data = num.split(':');
  //   result.set(data[0], data[1]);
  // });
  for (const entry of phoneNumbers) {
    // naive approach
    // const data = entry.split(':');
    // result.set(data[0], data[1]);
    // better approach
    const [name, number] = entry.split(':');
    result.set(name, number);
  }
  return result;
}

module.exports = phoneNumberDirectory;
