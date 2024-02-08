const exp = require('express');
const path = require('path');
const app = exp();
const stylus = require('stylus');

app.use(stylus.middleware(process.argv[3] || path.join(__dirname, "public")));

app.use(exp.static(process.argv[3] || path.join(__dirname, "public")));

app.listen(process.argv[2], () => {
    console.log(`Server started on port`);
});