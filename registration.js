const express = require("express");
const router = express.Router();
const companyModel = require('./Models/registration');
//const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const common = require('./Helpers/common');
//require('dotenv').config();

router.post('/signup',
	[
		check('firstName')
			.not()
			.isEmpty()
			.withMessage('Username is required'),
		check('email', 'Email is required')
			.isEmail()
			.custom(async email => {
				const value = await common.emailExits(companyModel, 'email', email);
				if (value) {
					throw new Error('Email is already exists!!!');
				}
			}),
		check('password', 'Password is requried')
			.isLength({ min: 8 }),
		check('companyName')
			//	.optional({ checkFalsy: true })
			.not()
			.isEmpty()
			.isLength({ min: 3 })
			.withMessage('Company name  is required'),
		check('timezone')
			//.optional({ checkFalsy: true })
			.not()
			.isEmpty()
			.withMessage('Timezone is required')
	], async (req, res, next) => {
		console.log("req",req.body);
		const errors = validationResult(req).array();
		const extractedErrors = []
		if (errors.length > 0) {
			console.log("errors---",errors);
			errors.map(err => extractedErrors.push({ [err.path]: err.msg }))
			return res.status(400).json({ error: extractedErrors });
		} else {
			console.log("out");
			let companyDetails = new companyModel({
				companyId: common.generateUid(),
				userType: req.body.userType,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				userName: req.body.userName,
				email: req.body.email,
				password: common.getEncrytedPwd(req.body.password),
				companyName: req.body.companyName,
				timezone: req.body.timezone,
				sipprofile: req.body.sipprofile,
				role:req.body.role,
				trunk:req.body.trunk,
				channel: req.body.channel,
				domain: req.body.domain,
				address: req.body.address,
				city: req.body.city,
				contactNumber: req.body.contactNumber,
				state: req.body.state,
				pincode: req.body.pincode,
				country: req.body.country,
				policyAccepted: req.body.policyAccepted,
				status: (req.body.userType == 0) ? "A" : "D",
				createdAt: Date.now(),
				isVerified: (req.body.userType == 0) ? 1 : 0,
				verificationToken: common.generateToken()//Math.random().toString(36).substring(2, 30) + Math.random().toString(36).substring(2, 30)
			});
			if (req.body.userType == 0) {		
				await companyDetails.save().then(() => {
					return res.json({ message: "Registered Successfully ", status: 200 });
				}).catch((err) => {
					console.log('errrr---',err);
					return res.json({ error: "Data not saved successfully", status: 400 });
				})
			} else {
				try {
					const token = companyDetails.verificationToken;
					// Configure nodemailer to send the verification email
					const transporter = await common.sendmail();
					const mailOptions = {
						from: 'iamektapatel58@gmail.com',
						to: 'patelekta58@yahoo.in',//companyDetails.email,
						subject: 'Please verify your email address',
						text: `Hi ${companyDetails.firstName},\n\nPlease click on the following link to verify your email address:\n\n http://localhost:3002/verify-email/&?token=${token}\n\nIf you did not request this, please ignore this email.\n`,
					};
					// Send the verification email
					const info = await transporter.sendMail(mailOptions);
					console.log(info.messageId);
					if (info.messageId) {
						await companyDetails.save();
						return res.json({ message: "Email sent successfully", code: token, status: 200 });
					}
				} catch (error) {
					console.error('Error sending email:', error);
					return res.json({ message: "An error occurred while sending the email.Please try again.", status: 400 });
				}
			}

		}
	});
router.post('/verify-email', async (req, res) => {
	await companyModel.find({ "verificationToken": req.body.token })
		.then(async function (company) {
			if (company.length > 0 && company[0].isVerified == 0) {
				await companyModel.findOneAndUpdate({ "_id": company[0].id }, { "status": "A", "isVerified": 1 }, { new: true });
				return res.json({ message: "Email verified successfully", status: 200 });
			} else {
				return res.json({ message: "Already verified or Profile not found.Please contact admin", status: 400 });
			}
		});
});
router.post('/resend-email', async (req, res) => {
	await companyModel.find({ "verificationToken": req.body.token })
		.then(async function (company) {
			try {
				//Configure nodemailer to send the verification email
				const transporter = await common.sendmail();
				const regenerateToken = common.generateToken();
				const mailOptions = {
					from: 'iamektapatel58@gmail.com',
					//	to: companyDetails.email,
					to: 'patelekta58@yahoo.in',
					subject: 'Please verify your email address',
					text: `Hi ${company[0].firstName},\n\nPlease click on the following link to verify your email address:\n\n http://10.10.10.22:3005/verify-email/&?token=${regenerateToken}\n\nIf you did not request this, please ignore this email.\n`,
				};
				// Send the verification email
				const info = await transporter.sendMail(mailOptions);
				if (info.messageId) {
					await companyModel.findOneAndUpdate({ "_id": company[0].id }, { "verificationToken": regenerateToken }, { new: true });
					return res.json({ message: "Resent-Email sent successfully", code: regenerateToken, status: 200 });
				}
			} catch (error) {
				return res.json({ error: "An error occurred while sending the email", status: 400 });
			}
		});
});
module.exports = router;
