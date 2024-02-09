const exp = require("express");
const app = exp();
const fs = require("fs");
const path = require("path");


const port = 3000;

app.use(exp.json());
app.use(exp.urlencoded({extended: true}));

let kayttajat = [
    {"id":"1","nimi":"Petri Keronen"},
    {"id":"2","nimi":"Jarkko Turpeinen"}
];

// --- loggers ---
const logger = (req, res, next) => {
    const date = new Date();
    const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const log = `${lDate}: ${req.method} ${req.url}\n`;

    fs.appendFile('./logs/log_2.txt', log,(err) => {
        if (err) throw err;
    });
    
    next();
}

app.use(logger);

// --- sivusto ---

// header
const header = "<a href='/'>Listaa käyttäjät</a> | <a href='/lisaa_kayttaja'>Lisää käyttäjä</a><hr>";

// näytä käyttäjät
app.get('/', (req, res) => {
    let table = `
    <table>
        <tr style="border:solid; padding:5px">
            <th>ID</th>
            <th>Nimi</th>
        </tr>
    `;

    for (let user of kayttajat) {
        table += `
        <tr>
            <td>${user.id}</td>
            <td>${user.nimi}</td>
        </tr>
        `;
    }

    table += `</table>`;

    res.send(header+table);
    res.end();
});

// lisää käyttäjät
app.get('/lisaa_kayttaja', (req, res) => {
    const form = `
    <form action='/kayttajat' method='POST'>
        Lisää uusi käyttäjä: <input type='text' id='nimi' name='nimi'/><br>
        <input type='submit' value='Lisää käyttäjä'/>
    </form>
    `;

    res.send(header + form);
});

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
app.post("/kayttajat", (req, res) => {
    const prev = Math.max(...kayttajat.map(user => user.id), 0);
    
    console.log(req.body);

    const kayttaja = req.body;

    kayttaja.id = (prev+1).toString();
    
    kayttajat = kayttajat.concat(kayttaja);
    res.redirect(303, '/');
    res.end();
});

app.listen(port, () => {
    console.log('Server listening on port 3000');
});