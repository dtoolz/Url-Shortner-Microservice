//set up requirements for app and create instances
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const myShortUrl = require('./models/myShortUrl');

app.use(bodyParser.json());
app.use(cors());

//to find static files and to render index.html to page
app.use(express.static(__dirname + '/public'));

//get request to create a database entry
app.get('/add/:theUrlToShorten(*)', (req,res,next)=>{
   var { theUrlToShorten } = req.params;

   return res.json({theUrlToShorten});
  // console.log(theUrlToShorten);
});





//check if app is listening to localhost or if app is working
app.listen(3000, ()=>{
   console.log('dtoolz loves nodejs');
});