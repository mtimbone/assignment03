let coinFlip;
do {
    coinFlip = (Math.round(Math.random() * 2));
    if (coinFlip < 1) {
        console.log("Tails!");
    } else
        console.log("Heads");
    continue;
}
while (coinFlip > 0);
console.log('End of game');

