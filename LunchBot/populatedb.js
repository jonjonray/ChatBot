console.log('This script populates a some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var LunchInstance = require('./models/lunchinstance')
var User = require('./models/user')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var lunchInstances = []
var users = []

function lunchInstanceCreate() {
  lunchinstancedetail = {};
  var lunchinstance = new LunchInstance(lunchinstancedetail);
  lunchinstance.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Lunch Instance: ' + lunchinstance);
    lunches.push(lunchinstance)
    cb(null, lunchinstance)
  })
}
function userCreate() {
  userdetail = {};
  var user = new User(userdetail);
  user.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  })
}

function createUsers(cb) {
  async.prallel([
    function(callback) {
      userCreate('bob', callback)
    },
    function(callback) {
      userCreate('adam', callback)
    }
  ], cb);
}
