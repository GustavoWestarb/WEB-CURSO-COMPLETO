// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any',
    price: 1.99,
    tag: 'Promotion'
});
console.log('Extensible: ', Object.isExtensible(product));

product.name = 'Eraser';
product.description = 'white school eraser';
delete product.tag;
console.log(product);

// Object.seal
const people = { name: 'Jualiana', age: 35 };
Object.seal(people);
console.log('Sealed: ', Object.isSealed(people));

people.lastName = 'Silva';
delete people.name;
people.age = 29;
console.log(people);

// Object.freeze = sealed + values constants
