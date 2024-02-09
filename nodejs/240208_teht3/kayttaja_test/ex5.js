const amount = process.argv[2];
const min = process.argv[3];
const max = process.argv[4];

let sum = max - min;

let list = [];

for (let i = 0; i < amount; i++) {
    let rand = Math.round(Math.random()*sum);

    list.push(rand+Number(min));
}

list.sort((a, b) => a - b);

console.log(list);