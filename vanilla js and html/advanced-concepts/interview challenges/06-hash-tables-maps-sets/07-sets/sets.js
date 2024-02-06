const nameSet = new Set(['Carlos', 'Mario', 'Escalante']);

nameSet.add('Oscar');

console.log(nameSet);
console.log(nameSet.has('Mario'));
console.log(nameSet.has('Mario'));

nameSet.delete('Mario');

console.log(nameSet.size);

console.log(nameSet.values());

for (const value of nameSet) {
  console.log(value);
}

const names = ['Abel', 'Escalante', 'Vallejos'];
const otherNames = new Set(names);

console.log(otherNames);
const arrayFromSet = [...otherNames];
console.log(arrayFromSet);

otherNames.clear();
console.log(otherNames);
