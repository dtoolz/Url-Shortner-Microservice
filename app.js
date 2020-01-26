//set up requirements for app and create instances
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const myShortUrl = require('./models/myShortUrl');

//connecting to database
mongoose.connect('mongodb://localhost:27017/myShortUrl',{ useNewUrlParser: true, useUnifiedTopology: true } );

app.use(bodyParser.json());
app.use(cors());

//to find static files and to render index.html to page
app.use(express.static(__dirname + '/public'));

//get request to create a database entry
app.get('/add/:theUrlToShorten(*)', (req,res,next)=>{
   var { theUrlToShorten } = req.params;

   var expression =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
   var regex = expression;

   if( regex.test(theUrlToShorten) === true ){
       var genShortUrl = Math.floor(Math.random()*100000).toString();
       var data = new myShortUrl(// a document created to be sent to database
         {//assigning inputs gotten from frontend to that in the database
             theUrlInput: theUrlToShorten,
             theShortUrl: genShortUrl
         }
       );
       data.save(err=>{//to save data to the database, added an error callback
           if(err){
               return res.send('error could not save to the database');
           }
       });
      return res.json({data});
   } else{
       return res.json({theUrlToShorten:'not a valid url'});
   }

   //return res.json({theUrlToShorten});
  // console.log(theUrlToShorten);
});





//check if app is listening to localhost or if app is working
app.listen(3000, ()=>{
   console.log('dtoolz loves nodejs');
});