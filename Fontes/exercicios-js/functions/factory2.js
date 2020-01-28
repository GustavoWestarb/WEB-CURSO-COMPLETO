
function createProduct(name, price){
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('Notebook', 3500.50));
console.log(createProduct('iPad', 4500.50));
console.log(createProduct('Vinho', 250));