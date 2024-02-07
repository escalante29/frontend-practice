const Stack = require('./stack');

/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseStringStack(str) {
  const stack = new Stack();
  let reversed = '';
  for (const char of str) {
    stack.push(char);
  }
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

module.exports = reverseStringStack;
