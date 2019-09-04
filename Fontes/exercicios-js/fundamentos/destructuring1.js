// novo recurso do ES2015

const people = {
    name: 'Ana',
    age: 19,
    address: {
        publicPlace: 'Rua ABC',
        number: 1000
    }
}

const { name, age } = people;
console.log(name, age);

const {name: n, age: a } = people;
console.log(n, a);

const { lastName, goodVibe = true } = people;
console.log(lastName, goodVibe);

const { address: {publicPlace, number, cep} } = people;
console.log(publicPlace, number, cep);
