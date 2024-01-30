const express = require('express')
const app = express()

app.get('/', (req, res) => res.end("<h1>Welcome Page!</h1>"));

app.listen(80, ()=> console.log('SErver is up and running...'));
