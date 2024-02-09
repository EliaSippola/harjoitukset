const fs = require("fs");

fs.readFile("./assets/kokonaisluvut.txt", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const list = data.toString().split(",");

    let sum = 0;
    list.forEach(element => {
        sum += Number(element);
    });

    console.log("Sum is " + sum);
});