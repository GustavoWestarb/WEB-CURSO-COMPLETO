//Function in JS is First-Class Object (Citizens)
//Higher-order function

//create literally
function funOne(){

}

//store in a variable
const funTwo = function() {

}

//store in a array
const array = [
    function(a,b){
        return a + b;
    }, 
    funOne,
    funTwo
];
console.log(array[0](2, 3));

//store in a attribute of object
const obj = {};
obj.speek = function(){
    return 'Opa';
}
console.log(obj.speek());

//pass a function as a parameter
function run(fun){
    fun();
}

run(function() {
    console.log('Executando...');
});

//a function can return/contain a function
function sum(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

sum(2, 3)(4);
const fiveMore = sum(2, 3);
fiveMore(4);