//set up requirements for app and create instances
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());







//check if app is listening to localhost or if app is working
app.listen(3000, ()=>{
   console.log('dtoolz loves nodejs');
});