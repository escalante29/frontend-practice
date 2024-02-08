const { LinkedList } = require('./linked-list');

const list = new LinkedList();

list.add(1);
list.add(5);
list.add(6);

list.insertAt(1, 'abc');
list.insertAt(2, 'def');
list.insertAt(3, 4);

list.removeFrom(2);

// console.log(list.get(1));
// console.log(list.get(3));

list.printAll();
