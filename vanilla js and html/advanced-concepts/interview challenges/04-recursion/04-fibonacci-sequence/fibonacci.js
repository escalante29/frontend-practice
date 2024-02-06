/**
 * Returns the number at the given index of the Fibonacci sequence.
 * @param {number} num - The index of the Fibonacci sequence.
 * @returns {number} - The number at the given index of the Fibonacci sequence.
 */
function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
