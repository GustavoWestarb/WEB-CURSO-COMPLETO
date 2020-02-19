
Array.prototype.map2 = function(callback){
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))        
    }
    return newArray;
}

const cart = [
    '{"name": "Borracha", "price": 3.45 }',
    '{"name": "Caderno", "price": 13.90 }',
    '{"name": "Kit de lapis", "price": 41.22 }',
    '{"name": "Caneta", "price": 7.50 }'
]

// Return a array just with the price

const forObject = json => JSON.parse(json);
const onlyPrice = product => product.price;

const resultOne = cart.map(forObject).map(onlyPrice);
const resultTwo = cart.map2(forObject).map2(onlyPrice);
console.log(resultOne);
console.log(resultTwo);

