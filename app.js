const express = require('express')
const pg = require('pg')
const port = 9001
const app = express()

app.use(express.static('public'));


app.get('/', (req, res)=>{
    //res.end("<h1>hello, world!</h1>")
    res.sendFile(__dirname + '/public/page1.html')
})


app.listen(port, ()=> console.log('Server is up...'))