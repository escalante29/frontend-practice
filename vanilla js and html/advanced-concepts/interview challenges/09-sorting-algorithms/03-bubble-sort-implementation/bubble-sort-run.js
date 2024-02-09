const { bubbleSort, altBubble } = require('./bubble-sort');

const array = [5, 4, 2, 1];

const result = bubbleSort(array);
const result2 = altBubble(array);

console.log(result);
console.log(result2);
