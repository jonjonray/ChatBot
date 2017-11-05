// 'use strict';
// Declare modules
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://reidjs:abc123@ds249325.mlab.com:49325/my_db';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// Instantiate express and allow it to be 'required'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// call static files
app.use(express.static('public'));

// Using routes here
app.use('/', controller);

// Start server
const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Express server listening on port ${port}...`);
});
