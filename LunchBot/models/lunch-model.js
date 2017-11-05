const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LunchSchema = new Schema({
  lunchLocation: String,
  owner: [UserSchema],
  attendees: [[UserSchema]],
  time: Date,
  open: {type: Boolean, default: true},
  timestampCreated: {type: Date, default: Date.now()}

});

// Create user schema
const UserSchema = new Schema({
<<<<<<< HEAD
  id: String
=======
  id: String,
>>>>>>> 741bc0827e5b622b531f0ca52b888a8f2029e6f7
});

// Create lunch model (which will house data on each person)
const Lunch = mongoose.model('lunch', LunchSchema);
// const a = new Lunch('Olivegard')
