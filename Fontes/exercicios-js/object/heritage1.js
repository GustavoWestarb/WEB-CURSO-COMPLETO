const ferrari = {
    model: 'F40',
    speedMax: 324
}

const volvo = {
    model: 'V40',
    speedMax: 200
}

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function myObject() {
    
}
console.log(typeof Object, typeof MyObject);
console.log(Object.prototype, myObject.prototype);


