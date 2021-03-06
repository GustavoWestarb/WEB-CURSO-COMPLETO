const numbers = [1, 2, 3, 4, 5] 

//For with purpose
let result = numbers.map(function(e){
    return e * 2
});

console.log(result);

const sum10 = e => e + 10;
const triple = e => e * 3;
const forReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

result = numbers.map(sum10).map(triple).map(forReal);
console.log(result);

