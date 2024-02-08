const exp = require('express');
const path = require('path');
const app = exp();

app.get('/home' , (req , res)=>{

    app.set('views', path.join(__dirname, 'templates'));
    app.set('view engine', 'pug');
    res.render('ex3_index', {date: new Date().toDateString()});

});

app.listen(process.argv[2], () => {
    console.log(`Server started on port`);
});