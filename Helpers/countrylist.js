const express = require("express");
const router = express.Router();
const countryModel = require('../Models/countrylist');
const countrylist = router.get('/getcountrylist', async (req, res) => {
	try {
		const country = await countryModel.find({}).exec()
		country ? res.status(200).send(country) : res.status(200).json({ message: 'List is empty' })
	} catch (error) {
		res.status(500).json({ error })
	}
});
module.exports = countrylist;