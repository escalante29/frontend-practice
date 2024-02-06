const {
  longestConsecutiveSequence,
  longestConsecutiveSequenceAlt,
} = require('./longest-consecutive');

console.time('longestConsecutiveSequence');
const result = longestConsecutiveSequence([
  100, 4, 1, 4, 200, 1, 3, 2, 21, 5, 22, 6, 23, 7, 24, 8, 9, 201, 10, 11, 12,
  202, 203, 204, 205, 206, 207,
]);
console.log(result);
console.timeEnd('longestConsecutiveSequence');

console.time('longestConsecutiveSequenceAlt');
const result2 = longestConsecutiveSequenceAlt([
  100, 4, 1, 4, 200, 1, 3, 2, 21, 5, 22, 6, 23, 7, 24, 8, 9, 201, 10, 11, 12,
  202, 203, 204, 205, 206, 207,
]);
console.log(result2);
console.timeEnd('longestConsecutiveSequenceAlt');
