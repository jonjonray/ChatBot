var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = Schema({
  slack_id: String
});
module.exports = mongoose.model('User', UserSchema);
