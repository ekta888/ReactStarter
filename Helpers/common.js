const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
/* const companyModel = require('../Models/registration');
console.log(companyModel);
const e = require('express');
const password = "Admin@123"
exports.hash = bcrypt.hashSync(password, saltRounds = 10) */

const getEncrytedPwd = (password, saltRounds = 10) => {
	return bcrypt.hashSync(password, saltRounds)

};
exports.getEncrytedPwd = getEncrytedPwd;

exports.emailExits = async (model, field, value) => {
	const count = await model.countDocuments({'email': value });
	return count;
}
exports.fieldExists = async (model, field, value) => {
	const query = {};
	query[field] = value;
	const count = await model.countDocuments(query);
	return count;
  };
exports.sendmail = () => {
	return nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'iamektapatel58@gmail.com',
			pass: 'jqkpivvupevxjkjl',
		},
	});
}
exports.generateToken = () => {
	return Math.random().toString(36).substring(2, 30) + Math.random().toString(36).substring(2, 30)
}