const printResult = function(note){
    if (note >= 7) {
        console.log('Approved!')
    } else{
        console.log('Disapproved!')
    }
}

printResult(10);
printResult(4);
printResult('Epa!'); // caution, weakly typed!