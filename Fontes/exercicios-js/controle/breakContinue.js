const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const x in numbers) {
    if (x == 5) {
        break;
    }
    console.log(`${x} = ${numbers[x]}`);
}

for (const y in numbers) {
    if (y == 5) {
        continue;
    }
    console.log(`${y} = ${numbers[y]}`);
}

external:
for (const a in numbers) {
    for (const b in numbers) {
        
        if (a == 2 && b == 3) {
            break external;
        }
        console.log(`Per = ${a}, ${b}`);
    }
}