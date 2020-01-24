const people = {
    greeting: 'Good Morning!',
    speek(){
        console.log(this.greeting);
    }
}

people.speek();
const speek = people.speek;
speek(); //conflict between paradigms: functional and OO

const speekOfPeople = people.speek.bind(people);
speekOfPeople();
