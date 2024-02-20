const exp = require('express');
const app = exp();

// .env config
require('dotenv').config();

// port settings at .env, default 3000
const port = process.env.PORT || 3030;

// default page
app.get('/', (req, res) => {
    res.send('Seeking truths beyond meaning of life, you will find 43.');
});

// listener
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});