const exp = require('express');
const app = exp();

app.use(exp.static(process.argv[3] || path.join(__dirname, "public")));

app.listen(process.argv[2], () => {
    console.log(`Server started on port`);
});