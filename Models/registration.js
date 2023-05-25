var mongoose = require('mongoose');
var Schema = mongoose.Schema;
companySchema = new Schema({
	companyId: { type: Number },
	userType: { type: Number, default: null, index: true },
	firstName: { type: String, default: null },
	lastName: { type: String, default: null },
	companyName: { type: String, default: null },
	email: { type: String, unique: true, index: true },
	password: { type: String, required: true },
	status: { type: String, default: null },
	contactNumber: { type: String, default: null },
	address: { type: String, default: null },
	city: { type: String, default: null },
	pincode: { type: String, default: null },
	state: { type: String, default: null },
	country: { type: Number, default: null },
	timezone: { type: String, default: null },
	createdAt: { type: String, default: null },
	policyAccepted: { type: Number, default: null },
	isVerified: { type: String, default: 0 },
	verificationToken: { type: String, default: null }
})
companySchema = mongoose.model('db_companies', companySchema);
module.exports = companySchema;