// strategy 1 to generate value pattern
function sumOne(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(sumOne(), sumOne(3), sumOne(1, 2, 3), sumOne(0, 0, 0));

// strategy 2, 3 e 4 to generate value pattern
function sumTwo(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    
    return a + b + c;
}

console.log(sumTwo(), sumTwo(3), sumTwo(1, 2, 3), sumTwo(0, 0, 0));

// value pattern of ES2015
function sumThree(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(sumTwo(), sumTwo(3), sumTwo(1, 2, 3), sumTwo(0, 0, 0));