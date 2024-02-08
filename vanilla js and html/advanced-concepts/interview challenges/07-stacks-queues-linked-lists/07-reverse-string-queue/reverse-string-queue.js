const Queue = require('./queue');

/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
const reverseStringQueue = (str) => {
  let reversed = '';
  const myQueue = new Queue();
  for (let i = str.length - 1; i >= 0; i--) {
    myQueue.enqueue(str[i]);
  }
  while (!myQueue.isEmpty()) {
    reversed += myQueue.dequeue();
  }
  return reversed;
};

module.exports = reverseStringQueue;
