var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = Schema({
  slackId: String
});
module.exports = mongoose.model('User', UserSchema);
