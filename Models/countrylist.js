var mongoose = require('mongoose');
var Schema = mongoose.Schema;
countrySchema = new Schema({}, { strict: false });
countrySchema = mongoose.model('db_countries', countrySchema);
module.exports = countrySchema;