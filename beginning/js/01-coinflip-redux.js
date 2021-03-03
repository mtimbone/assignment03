let coinFlip;
let num = prompt("select a number of times you want to flip the coin");
for (i = 0; i < num; i++) {
    let coinFlip = (Math.round(Math.random() * 2));

    if (coinFlip > 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
}

