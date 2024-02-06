/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email) {
  const atSymbolIndex = email.indexOf('@');
  const dotIndex = email.indexOf('.');
  if (
    atSymbolIndex < 0 ||
    dotIndex < 0 ||
    dotIndex == 0 ||
    atSymbolIndex == 0
  ) {
    return false;
  }
  return true;
}

module.exports = validateEmail;
