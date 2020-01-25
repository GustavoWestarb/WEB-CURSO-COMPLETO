const makers = ['Mercedes', 'Audi', 'Bmw'];

function print(name, index){
    console.log(`${index + 1}, ${name}`);
}

makers.forEach(print);
makers.forEach(maker => console.log(maker));