const bodyParser = require('body-parser');
const exp = require('express');
const app = exp();

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2], () => {
    console.log(`Server started on port`);
});