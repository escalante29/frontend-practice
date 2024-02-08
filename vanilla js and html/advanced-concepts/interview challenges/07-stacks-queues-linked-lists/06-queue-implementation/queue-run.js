const Queue = require('./queue');

const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue);
queue.dequeue();
console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.isFull());
// console.log(queue.peek());
// console.log(queue.getLength());
