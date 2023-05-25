const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const common = require('./Helpers/common');
const bcrypt = require('bcryptjs');
const users = require('./Models/registration');
//const users = require('./Models/registration');
const { check, validationResult } = require('express-validator/check');
// router.post(
// 	'/login',
// 	[
// 		check('email', 'Please include a valid email').isEmail(),
// 		check('password', 'Password is required').exists()
// 	],
// 	async (req, res) => {
// 		const errors = validationResult(req);
// 		if (!errors.isEmpty()) {
// 			return res.status(400).json({ errors: errors.array() });
// 		} else {
// 			console.log("req", req);
// 			console.log("9000");
// 		}

// 	});
router.post('/login', [
	check('email', 'Please enter a valid email').isEmail(),
	check('password')
		.not()
		.isEmpty()
		.withMessage('Passwords is required'),
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		users.find({ "email": req.body.email })
			.then(function (savedUser) {
				if (savedUser.length > 0) {
					if (req.body.password) {
						bcrypt.compare(req.body.password, savedUser[0].password)
							.then(doMatch => {
								if (doMatch) {
									const token = jwt.sign({ id: savedUser.id, email: savedUser.email }, 'secret', { expiresIn: '4h' });
									return res.json({ message: "Saved Succcessfully", token: token, status: 200 })
								} else {
									return res.json({ error: "Invalid  Password", type: "password", status: 400 })
								}
							});
					}
				} else {
					return res.json({ error: "User not found", type: "email", status: 400 })
				}
			})
	}
});
router.post('/forgot-password',
	[
		check('email', 'Please enter a valid email').isEmail()
	],
	async (req, res, next) => {
		const errors = validationResult(req).array();
		if (errors.length > 0) {
			return res.json({ error: errors, status: 400 });
		} else {
			await users.find({ "email": req.body.email })
				.then(async function (company) {
					if (company.length == 0) {
						return res.json({ message: "The system could not locate the specified email.Please get in touch with our support staff or verify that the email you entered is accurate.", status: 400 });
					} else {
						//Configure nodemailer to send the verification email
						const transporter = await common.sendmail();
						const mailOptions = {
							from: 'iamektapatel58@gmail.com',
							//	to: companyDetails.email,
							to: 'patelekta58@yahoo.in',
							subject: 'Forgot Password',
							text: `Hi ${company[0].firstName},\n\nPlease click on the following link in order to change for password \n\n http://10.10.10.22:3005/reset-password/&?token=${company[0].verificationToken}\n\nIf you did not request this, please ignore this email.\n`,
						};
						// Send the verification email
						const info = await transporter.sendMail(mailOptions);
						if (info.messageId) {
							return res.json({ message: "Email sent successfully", code: company[0].verificationToken, status: 200 });
						}
					}
				});
		}
	})
router.post('/reset-password', [
	check('password')
		.not()
		.isEmpty().withMessage('Password is required.')
		.isLength({ min: 8 }).withMessage('Password length should be greater than 8.'),
	check('confirmpassword')
		.not()
		.isEmpty().withMessage('Confirm password is required.')
		.custom((value, { req }) => value === req.body.password)
		.withMessage('Password and confirm password should  match.')
], async (req, res) => {

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({ errors: errors.array(), status: 400 });
	} else {
		if (req.body.token) {
			const { password, confirmpassword, token } = req.body;
			console.log(password);
			console.log(confirmpassword);
			console.log(token);
			await users.find({ "verificationToken": token })
				.then(async function (company) {
					console.log("company", company);
					if (company.length == 0) {
						return res.json({ message: "User not found", status: 400 });
					} else {
						const newPassword = common.getEncrytedPwd(password);
						await users.findOneAndUpdate({ "_id": company[0].id }, { "password": newPassword });
						return res.json({ message: "Password updated successfullly", status: 200 });
					}
				});
		} else {
			return res.json({ message: "Token not found", status: 400 });
		}
	}


});
module.exports = router;