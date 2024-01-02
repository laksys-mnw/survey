const express = require('express');
require('dotenv').config()
const bodyparser = require('body-parser');
const { addFunctionalArea, lookingForJob, jobChange } = require('./queries.js');
// import express              from 'express';
// import { config }           from 'dotenv';
// import  json  from 'body-parser';
// import urlencoded from 'body-parser';         
// import { addFunctionalArea, lookingForJob, jobChange } from './queries.js';

//console.log(process.env)
//config();

const port = process.env.PORT || 9001;
const app  = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get ('/',      (req, res) => res.sendFile(__dirname + '/public/page1.html'))
app.post('/page2', (req, res) => addFunctionalArea(req, res));
app.post('/page3', (req, res) => lookingForJob(req, res));
app.post('/page5', (req, res) => jobChange(req, res));

app.listen(port, () => console.log(`Server is up on port ${port}...`));
