const exp = require('express');
const fs = require('fs');
const path = require('path');

const app = exp();

app.get("/books", (req, res) => {
    fs.readFile(process.argv[3] || path.join(__dirname, "public"), (err, data) => {
        const obj = JSON.parse(data);
        res.json(obj);
    });
    
})

app.listen(process.argv[2], () => {
    console.log('Server started');
})