console.log('here');
var LunchInstance = require('./models/lunchinstance');
var mongoDB = 'mongodb://reidjs:abc123@ds249325.mlab.com:49325/my_db';
const mongoose = require('mongoose');

mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB.');
})
.on('error', function(err) {
  console.log('Connection error:', err);
});

// var lunchInstance = mongoose.model('lunchInstance', LunchInstanceSchema)
var db = mongoose.connection;
// var lunch = mongoose.model('LunchInstance', LunchInstance);
// console.log();
console.log('end');
LunchInstance.find(function() {
  console.log();
  mongoose.connection.close();

});
// console.log(LunchInstance.find(cb));
