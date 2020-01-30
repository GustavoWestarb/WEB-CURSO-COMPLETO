const people = {
    name: 'Rebeca',
    age: 2,
    weight: 13
}

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

Object.entries(people).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

Object.defineProperty(people, 'dateBirth',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
});

people.dateBirth = '01/01/2017';
console.log(people.dateBirth);
console.log(Object.keys(people));

//Object.assing (ECMAScript 2015)
const target = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 }
const obj = Object.assign(target, o1, o2);
console.log(obj);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);


