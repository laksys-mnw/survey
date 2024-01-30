const express = require('express');
require('dotenv').config()

const https = require('https');

//-------------------------------------------
// SSH Certificates
var fs = require('fs');
var https_options = {
	key:  fs.readFileSync("cert/server.key"),
	cert: fs.readFileSync("cert/server.cert")
}

//-------------------------------------------

const bodyparser = require('body-parser');
const {
    addFunctionalArea, addFunctionalAreaReport,
    lookingForJob, lookingForJobReport,
    jobChange, jobChangeReport } = require('./queries.js');

const PORT = process.env.PORT || 443;
const app  = express()

//---------------------------
//Authentication
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

app.get('/reports',     (req, res)=> res.sendFile(__dirname + '/public/reports.html'))
app.get('/reports/far', (req, res)=> addFunctionalAreaReport(req, res) )
app.get('/reports/ljr', (req, res)=> lookingForJobReport(req, res) )
app.get('/reports/jcr', (req, res)=> jobChangeReport(req, res) )

const server = https.createServer(https_options, app)
   .listen(PORT, () => console.log(`Server running at localhost:${PORT}`));

//app.listen(PORT, () => console.log(`Server is up on port ${PORT}...`));
