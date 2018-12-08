const express = require('express')
const app = express()

app.get('/test', (req,res)=> {
res.send('Hello World!');
});

app.get('/', (req,res)=> {
res.send('Req: '+ res);
//console.dir(res);
});

const server = app.listen(7001, ()=> {
console.log(`Express running at port ${server.address().port}`);
});
