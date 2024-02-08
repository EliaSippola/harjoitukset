const exp = require("express");
const app = exp();

app.put('/message/:id', (req, res) => {
    let id = req.params.id;

    res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.listen(process.argv[2]);