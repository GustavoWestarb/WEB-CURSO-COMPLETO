function People(name) {
    this.name = name;

    this.speek = function() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new People('Gustavo');
p1.speek();