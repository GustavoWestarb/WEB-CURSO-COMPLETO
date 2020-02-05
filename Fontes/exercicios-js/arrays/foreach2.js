
Array.prototype.forEach2 = function(callback){
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

approved.forEach2(function(name, index){
    console.log(`${index + 1} - ${name}`);
});