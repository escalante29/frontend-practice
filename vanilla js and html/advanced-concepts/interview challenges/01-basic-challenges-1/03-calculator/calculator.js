/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}

module.exports = calculator;
