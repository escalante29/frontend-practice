const Stack = require('./stack');

/**
 * Returns true if the parenthesis in a string are balanced.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether the parenthesis in the string are balanced.
 */
function isBalanced(str) {
  const myStack = new Stack();
  for (const char of str) {
    if (char === '(') {
      myStack.push(char);
    } else if (char === ')') {
      if (myStack.isEmpty()) {
        return false;
      }
      myStack.pop();
    }
  }
  return myStack.isEmpty();
}

module.exports = isBalanced;
