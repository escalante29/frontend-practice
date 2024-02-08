const Queue = require('./queue');
const Stack = require('./stack');

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false if it is not.
 */
function isPalindromeQueueStack(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    queue.enqueue(formattedStr[i]);
    stack.push(formattedStr[i]);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
