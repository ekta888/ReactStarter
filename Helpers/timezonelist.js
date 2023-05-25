
const express = require("express");
const router = express.Router();
const timezoneModel = require('../Models/timezonelist');
const timezonelist = router.get('/gettimezonelist', async (req, res) => {
	try {
		const timezone = await timezoneModel.find({}).exec()
		// const list = new Array()
		// for (let row of timezone) {
		// 	list.push(timezone)
		// }
		timezone ? res.status(200).send(timezone) : res.status(200).json({ message: 'List is empty' })
	} catch (error) {
		res.status(500).json({ error })
	}
});
//console.log(timezonelist);
module.exports = timezonelist;