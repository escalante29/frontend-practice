const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

myHashTable.set('Charlie', 123);
myHashTable.set('Abel', 567);
myHashTable.set('Oscar', 567);
myHashTable.set('Daniela', 567);
myHashTable.set('Joaquin', 567);
myHashTable.set('Socrates', 567);
myHashTable.set('Altagracia', 234234234);

console.log(myHashTable.get('Altagracias'));
// myHashTable.remove('Altagracia');
myHashTable.remove('Socrates');
console.log(myHashTable.get('Socrates'));

// myHashTable.printTable();

myHashTable.set('Socrates', 3983459);

console.log(myHashTable.has('Daniela'));
console.log(myHashTable.printTable());

console.log('clearing buckets');
myHashTable.clear();
myHashTable.printTable();
