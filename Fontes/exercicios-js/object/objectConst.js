// people -> 123 -> {...}
const people = { name: 'Gustavo' };
people.name = 'Pedro';
console.log(people);

//people -> 456 -> {...}
//people = { name: 'Ana' };

Object.freeze(people);

people.name = 'Maria';
people.address = 'Street ABC'
delete people.name

console.log(people)

const constPeople = Object.freeze({ name: 'Westarb'})
constPeople.name = 'Gustavo';
console.log(constPeople);