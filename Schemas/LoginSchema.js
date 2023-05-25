var mongoose = require('mongoose');
//const loginModel = require('../Models/login');
const Schema = mongoose.Schema;
const logintbl = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
})
//module.exports = mongoose.model('login', logintbl);
module.exports = logintbl;