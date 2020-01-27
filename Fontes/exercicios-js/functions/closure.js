//Closure is the scope created when a function is declared
//This scope permit the function access and manipulating variables extern this function

//Context lexicon in action!

const x =  'Global';

function out(){
    const x = 'Local';
    function inside(){
        return x;
    }

    return inside;
}

const myFunction = out();
console.log(myFunction());