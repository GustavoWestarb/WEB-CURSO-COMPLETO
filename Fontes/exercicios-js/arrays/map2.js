const cart = [
    '{"name": "Borracha", "price": 3.45 }',
    '{"name": "Caderno", "price": 13.90 }',
    '{"name": "Kit de lapis", "price": 41.22 }',
    '{"name": "Caneta", "price": 7.50 }'
]

// Return a array just with the price

const forObject = json => JSON.parse(json);
const onlyPrice = product => product.price;

const result = cart.map(forObject).map(onlyPrice);
console.log(result);

