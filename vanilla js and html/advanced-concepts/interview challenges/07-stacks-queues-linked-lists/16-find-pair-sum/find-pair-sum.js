const DoublyLinkedList = require('./DoublyLinkedList');

/**
 * Finds a pair of distinct elements from the array whose sum is equal to the target sum.
 * @param {number[]} nums - The array of integers.
 * @param {number} targetSum - The target sum to find.
 * @returns {number[] | null} - An array containing the pair of elements whose sum is the target sum, or null if no such pair exists.
 */
function findPairSum(nums, targetSum) {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const difference = targetSum - num;
    if (seen.contains(difference)) {
      return [difference, num];
    } else {
      seen.append(num);
    }
  }

  return null;
}

module.exports = findPairSum;
