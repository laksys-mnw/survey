const express = require('express');
require('dotenv').config()
const bodyparser = require('body-parser');
const { 
    addFunctionalArea, addFunctionalAreaReport,
    lookingForJob, lookingForJobReport,
    jobChange, jobChangeReport } = require('./queries.js');

const port = process.env.PORT || 9001;
const app  = express()
//---------------------------
const auth = require('express-basic-auth');
const agents = {'damu': 'damu1234', 'arun': 'arun1234'}
app.use( '/reports/*', auth({users: agents, challenge: true}));
//------------------------------
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.get ('/',      (req, res) => res.sendFile(__dirname + '/public/page1.html'))
app.post('/page2', (req, res) => addFunctionalArea(req, res));
app.post('/page3', (req, res) => lookingForJob(req, res));
app.post('/page5', (req, res) => jobChange(req, res));

app.get('/reports', (req, res)=> res.sendFile(__dirname + '/public/reports.html'))
app.get('/reports/far', (req, res)=> addFunctionalAreaReport(req, res) )
app.get('/reports/ljr', (req, res)=> lookingForJobReport(req, res) )
app.get('/reports/jcr', (req, res)=> jobChangeReport(req, res) )

app.listen(port, () => console.log(`Server is up on port ${port}...`));
