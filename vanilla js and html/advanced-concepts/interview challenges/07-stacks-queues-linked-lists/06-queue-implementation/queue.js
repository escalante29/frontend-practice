class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  enqueue(item) {
    if (this.isFull()) return false;
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }

  peek() {
    return this.queue[this.head];
  }

  getLength() {
    return this.tail - this.head;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }
  isEmpty() {
    return this.getLength() === 0;
  }
}

module.exports = Queue;
