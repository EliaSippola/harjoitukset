const exp = require('express');
const app = exp();

app.get('/home' , (req , res)=>{

   res.end('Hello World!');

});

app.listen(process.argv[2], () => {
    console.log(`Server started on port`);
});