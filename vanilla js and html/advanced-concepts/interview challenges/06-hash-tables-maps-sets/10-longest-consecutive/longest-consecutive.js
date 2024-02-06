/**
 * Returns the length of the longest consecutive sequence in the array.
 * @param {number[]} nums - An array of integers.
 * @returns {number} - The length of the longest consecutive sequence.
 */
function longestConsecutiveSequence(nums) {
  const unique = new Set(nums);
  const sorted = Array.from(unique).sort((a, b) => {
    return a - b;
  });
  let longestPossibilities = [];
  let currentPossibility = 0;

  for (const [index, num] of sorted.entries()) {
    if (sorted[index + 1] - num === 1) {
      if (longestPossibilities[currentPossibility]) {
        longestPossibilities[currentPossibility] += 1;
      } else {
        longestPossibilities[currentPossibility] = 1;
      }
    } else {
      longestPossibilities[currentPossibility] =
        (longestPossibilities[currentPossibility] || 0) + 1;
      currentPossibility++;
    }
  }

  return Math.max(...longestPossibilities);
}

function longestConsecutiveSequenceAlt(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

module.exports = {
  longestConsecutiveSequenceAlt,
  longestConsecutiveSequence,
};
