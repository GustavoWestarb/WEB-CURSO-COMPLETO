function test1(number){
    if (number > 7)
        console.log(number);

    console.log('Final');
}

// test1(6);
// test1(8);

function test2(number){
    if (number > 7); { //cuidade com o ;, não usar com as estruturas de controle
        console.log(number)
    }
}

test2(6);
test2(8);
