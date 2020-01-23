function getIntegerRandomBetween(min, max){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = -1;

do {
    option = getIntegerRandomBetween(-1, 10);
    console.log(`Option random ${option}.`);
}while(option != -1)

console.log('To the next!');