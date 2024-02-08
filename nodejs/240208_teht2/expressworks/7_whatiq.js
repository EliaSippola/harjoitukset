const exp = require('express');
const app = exp();

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(process.argv[2], () => {
    console.log("Server opened!");
});