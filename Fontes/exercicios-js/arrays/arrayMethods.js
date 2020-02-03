const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilots.pop(); // massa broken the car!
console.log(pilots);

pilots.push('Verstappen');
console.log(pilots);

pilots.shift() //remove the primary element
console.log(pilots);

pilots.unshift('Hamilton');
console.log(pilots);

// splice can add and remove elements

//add
pilots.splice(2, 0, 'Bottas', 'Massa');
console.log(pilots);

//remove
pilots.splice(3, 1); //massa broken!
console.log(pilots);

const somePilots = pilots.slice(2) // new array
console.log(somePilots);

const somePilots2 = pilots.slice(1, 4);
console.log(somePilots2);






