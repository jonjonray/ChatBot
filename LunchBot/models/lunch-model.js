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
  id: String,
});

// Create user model (which will house each person's list)
const Lunch = mongoose.model('lunch', LunchSchema);
