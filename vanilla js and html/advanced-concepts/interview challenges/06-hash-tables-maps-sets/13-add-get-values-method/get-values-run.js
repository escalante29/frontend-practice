const HashTable = require('./HashTable');

const myHashTable = new HashTable();

myHashTable.set('a', 'Alice went to NYC!');
myHashTable.set('b', undefined);
myHashTable.set('c', 3);
myHashTable.set('d', 4);

console.log(myHashTable.getValues());
