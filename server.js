const express = require('express')
const app = express()

app.set('view engine', 'pug');

app.get('/test', (req,res)=> {
res.send('Hello World!');
});

app.get('/', (req,res)=> {
res.send('Req: update'+ res);
//console.dir(res);
});

const server = app.listen(7002, ()=> {
console.log(`Express running at port ${server.address().port}`);
});
