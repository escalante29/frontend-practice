/**
 * Returns an array of indices of two numbers that add up to the target.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array of indices of the two numbers.
 */
function twoSum(nums, target) {
  const seen = new Set();
  const result = [];
  for (const [index, number] of nums.entries()) {
    if (seen.has(target - number)) {
      return [nums.indexOf(target - number), index];
    } else {
      seen.add(number);
    }
  }
  return result;
}

module.exports = twoSum;
