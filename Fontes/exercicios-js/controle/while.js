function getIntegerRandomBetween(min, max){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;

while(option != -1){
    option = getIntegerRandomBetween(-1, 10);
    console.log(`Option random ${option}.`);
}

console.log('To the next!');