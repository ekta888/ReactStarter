const loginModel = require('../Models/login');
var mongoose = require('../MongoDatabase/createdatabase');
const common = require('../Helpers/common');
const hash = common.hash;
var userDetails = new loginModel({
	username: "Admin123@gmail.com",
	password: hash

});
userDetails.save().then(() => {
	mongoose.connection.close();
}).catch((err) => {
	console.log(err);
})