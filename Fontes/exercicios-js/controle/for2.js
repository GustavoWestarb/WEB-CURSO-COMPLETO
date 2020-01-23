const notes = [6.7, 7.4, 9.8, 8.1, 7.7];

for (const i in notes) {
    console.log(i, notes[i]);
}

const people = {
    name: 'Ana',
    lastName: 'Colzani',
    age: 20,
    weight: 64
};

for (const attribute in people) {
    console.log(`${attribute} = ${people[attribute]}`);
}