const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const companyModel = require('./Models/registration');
const common = require('./Helpers/common');
router.post('/forgot-password',
	[
		check('email', 'Please enter a valid email').isEmail()
	],
	async (req, res, next) => {
		const errors = validationResult(req).array();
		if (errors.length > 0) {
			return res.json({ error: errors, status: 400 });
		} else {
			//try {
			await companyModel.find({ "email": req.body.email })
				.then(async function (company) {

					if (company.length == 0) {
						return res.json({ message: "The system could not locate the specified email.Please get in touch with our support staff or verify that the email you entered is accurate.", status: 400 });
					} else {
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
					}

				});
			console.log("reqbody", req.body);
			// } catch (error) {
			// 	return res.json({ message: "An error occurred while sending the email", status: 400 });
			// }
		}

	})
module.exports = router;