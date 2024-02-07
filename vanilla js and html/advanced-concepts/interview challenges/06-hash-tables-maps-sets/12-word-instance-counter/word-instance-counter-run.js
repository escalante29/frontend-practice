const wordInstanceCounter = require('./word-instance-counter');

const result = wordInstanceCounter(
  'The quick brown fox jumps over the lazy lazy lazy dog.',
  'LAZY'
);

console.log(result);
