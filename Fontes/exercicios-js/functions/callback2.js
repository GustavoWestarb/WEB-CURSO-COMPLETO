const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// with out callback
const lowGrades1 = [];
for (const i in notes) {
    if (notes[i] < 7) {
        lowGrades1.push(notes[i]);
    }
}

console.log(lowGrades1);

// with callback
const notesLowerSeven = note => note < 7;
const lowGrades2 = notes.filter(notesLowerSeven);

console.log(lowGrades2);