/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password) {
  if (password.length < 1 || password.length < 8) return false;
  const charArray = password.split('');
  const hasUpperCase = charArray.some((char) => {
    return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
  });
  const hasLowerCase = charArray.some((char) => {
    return char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
  });
  const hasDigit = charArray.some((char) => {
    return isNaN(char) === false;
  });
  return hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;
