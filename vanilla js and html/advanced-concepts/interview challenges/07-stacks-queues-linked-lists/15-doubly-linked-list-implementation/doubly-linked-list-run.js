const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);

list.prepend(500);

list.insertAt(1, 250);

list.remove(0);
// console.log(list.get(0).data);

// list.printAll();

console.log(list.contains(250));
console.log(list.contains(500));
