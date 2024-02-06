const nameMap = new Map([
  [1, 'Carlos'],
  [2, 'Mario'],
  [3, 'Escalante'],
]);

const myFunction = () => {};
const myObj = {};
const map2 = new Map([
  ['name', 'Carlos'],
  [1, 'one'],
  [true, 'this is true'],
  [null, 'this is null'],
  [myFunction, 'my function'],
  [myObj, 'some object'],
]);

map2.set('charlie', { key: 1 });

console.log(map2.delete(null));

console.log(map2.has('charlie'));
console.log(map2.size);

for (let [key, value] of map2) {
  console.log(key, value);
}

map2.forEach((value, key) => console.log(`value=${value}, key=${key}`));

console.log(map2.keys());
console.log(map2.values());

map2.clear();

console.log(map2.size);
