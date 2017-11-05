var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LunchInstanceSchema = Schema({
  lunchLocation: String,
  attendees: [{ type: Schema.ObjectId, ref: 'User', required: true }]
  // attendees: [{ type: Schema.ObjectId, ref: 'User', required: false }],
  // time: Date,
  // open: {type: Boolean, default: true},
  // timestampCreated: {type: Date, default: Date.now()}

});

module.exports = mongoose.model('LunchInstance', LunchInstanceSchema);

//send data
