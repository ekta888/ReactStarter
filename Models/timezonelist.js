var mongoose = require('mongoose');
var Schema = mongoose.Schema;
timezoneSchema = new Schema({}, { strict: false });
timezoneSchema = mongoose.model('db_timezones', timezoneSchema);
module.exports = timezoneSchema;