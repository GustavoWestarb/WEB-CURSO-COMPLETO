class People{
    constructor(name){
        this.name = name;
    }

    speek(){
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new People('Gustavo');
p1.speek();

const createPeople = name => {
    return {
        speek: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPeople('Gustavo');
p2.speek();