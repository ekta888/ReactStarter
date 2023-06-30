var mongoose = require('mongoose');
var Schema = mongoose.Schema;
companySchema = new Schema({
	companyId: { type: Number,default: null,index: true },
	userType: { type: Number, default: null, index: true },
	firstName: { type: String, default: null },
	lastName: { type: String, default: null },
	userName:{type: String, default: null},
	companyName: { type: String, default: null },
	email: { type: String, unique: true, index: true },
	password: { type: String, required: true },
	sipprofile : { type: String, default: null },
	role:{ type: String, default: null },
	trunk:{ type: String, default: null },
	status: { type: String, default: null },
	channel:{ type: Number, default: null },
	domain: { type: String, default: null },
	contactNumber: { type: String, default: null },
	address: { type: String, default: null },
	city: { type: String, default: null },
	pincode: { type: String, default: null },
	state: { type: String, default: null },
	country: { type: Number, default: null },
	timezone: { type: String, default: null },
	createdAt: { type: String, default: null },
	updatedAt: { type: String, default: null },
	policyAccepted: { type: Number, default: null },
	isVerified: { type: String, default: 0 },
	verificationToken: { type: String, default: null },
	isDeleted: { type: String, default: false }
})
companySchema = mongoose.model('db_companies', companySchema);
module.exports = companySchema;