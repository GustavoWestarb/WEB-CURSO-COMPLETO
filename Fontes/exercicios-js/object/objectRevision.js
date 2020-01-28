// dynamic collection of par key/value
const product = new Object
product.name = 'Chair';
product['brand'] = 'Generic';
product.price = 220;

console.log(product);
delete product.price;
delete product['brand'];
console.log(product);

const car = {
    model: 'A4',
    value: 89000,
    owner:{
        name: 'Raul',
        age: 56,
        address: {
            publicPlace: 'Rua ABC',
            number: 123
        }
    },
    conductors:[{
        name: 'Junior',
        age: 19
    },{
        name: 'Ana',
        age: 42
    }],
    calcValueSecurity: function(){
        // ...
    }
}

car.owner.address.number = 100
car['owner']['address']['publicPlace'] = 'Av Gigante'
console.log(car);

delete car.conductors;
delete car.owner.address;
delete car.calcValueSecurity;
console.log(car);
console.log(car.conductors);