const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

approved.forEach(function(name, index, array){
    console.log(`${index + 1} - ${name}`);
    console.log(array);
});

approved.forEach(name => console.log(name));

const printApproved = approve => console.log(approve);
approved.forEach(printApproved);
