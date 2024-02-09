const exp = require("express");
const fs = require("fs");
const app = exp();

let reqs = 0;

app.get("/", (req, res) => {
    reqs += 1;

    fs.writeFile("./assets/requestAmount.txt", reqs.toString(), (err) => {
        if (err) {
            console.error(err);
        }
    });

    res.send(String(reqs));
    res.end();
});

app.listen(30000);