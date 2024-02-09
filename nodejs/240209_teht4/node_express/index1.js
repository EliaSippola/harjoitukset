const exp = require("express");
const app = exp();
const fs = require("fs");

const port = 3000;

app.use(exp.json());

let kayttajat = [
    {"id":"1","nimi":"Petri Keronen"},
    {"id":"2","nimi":"Jarkko Turpeinen"}
];

// --- loggers ---
const logger = (req, res, next) => {
    const date = new Date();
    const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const log = `${lDate}: ${req.method} ${req.url}\n`;

    fs.appendFile('./logs/log_1.txt', log,(err) => {
        if (err) throw err;
    });

    next();
}

app.use(logger);


// --- api "methods" ---

// kaikki käyttäjät
app.get('/kayttajat', (req, res) => {
    res.json(kayttajat);
});

// yksi käyttäjä
app.get('/kayttajat/:id', (req, res) => {
    const id = req.params.id;
    const kayttaja = kayttajat.find(kayttaja => kayttaja.id === id);

    if (!kayttaja) {
        res.status(404).end();
    }

    res.json(kayttaja);
})

// yhden käyttäjän poisto
app.delete('/kayttajat/:id', (req, res) => {
    const id = req.params.id;
    kayttajat = kayttajat.filter(kayttaja => kayttaja.id !== id);

    res.status(204).end();
});

// käyttäjän muokkaus
app.put('/kayttajat/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.name;

    const kayttaja = kayttajat.find(kayttaja => kayttaja.id === id);

    if (kayttaja) {
        kayttaja.nimi = name;
        res.status(200).end();
    } else {
        res.status(204).end();
    }
}); 

// käyttäjän luonti
app.post("/kayttajat/", (req, res) => {
    const prev = Math.max(...kayttajat.map(user => user.id), 0);
    const kayttaja = req.body;
    kayttaja.id = (prev+1).toString();
    
    kayttajat = kayttajat.concat(kayttaja);
    res.json(kayttaja);
});

app.listen(port, () => {
    console.log('Server listening on port 3000');
});