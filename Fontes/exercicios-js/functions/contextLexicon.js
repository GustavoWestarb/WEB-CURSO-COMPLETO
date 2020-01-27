const value = 'Global';

function myFunction(){
    console.log(value);
}

function exec(){
    const valor = 'Local';
    myFunction();
}

exec();