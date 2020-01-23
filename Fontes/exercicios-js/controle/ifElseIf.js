Number.prototype.between = function(begin, end){
    return this >= begin && this <= end;
}

const printResult = function (note){

    if (note.between(9, 10)) {
        console.log('Honor board');
    } else if (note.between(7, 8.99)){
        console.log('Approved');
    } else if (note.between(4, 6.99)){
        console.log('Recovery');
    } else if (note.between(0, 3.99)){
        console.log('Disapproved');
    } else{
        console.log('Note invalid!');
    }
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);
