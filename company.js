const express = require("express");
const router = express.Router();
const companyModel = require("./Models/registration");
//const nodemailer = require('nodemailer');
const { check, validationResult } = require("express-validator");
const common = require("./Helpers/common");
router.post(
  "/add",
  [
    check("firstName").not().isEmpty().withMessage("Username is required"),
    check("email", "Email is required")
      .isEmail()
      .custom(async (email) => {
        const value = await common.emailExits(companyModel, "email", email);
        if (value) {
          throw new Error("Email is already exists!!!");
        }
      }),
    check("password", "Password is requried").isLength({ min: 8 }),
    check("companyName")
      //	.optional({ checkFalsy: true })
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage("Company name  is required"),
    check("timezone")
      //.optional({ checkFalsy: true })
      .not()
      .isEmpty()
      .withMessage("Timezone is required"),
    check("userName", "Username is required").custom(async (userName) => {
      const value = await common.fieldExists(
        companyModel,
        "userName",
        userName
      );
      if (value) {
        throw new Error("Username is already exists!!!");
      }
    }),
    check("domain", "Domain is required").custom(async (domain) => {
      const value = await common.fieldExists(companyModel, "domain", domain);
      if (value) {
        throw new Error("Domain is already exists!!!");
      }
    }),
    check("sipprofile")
      .not()
      .isEmpty()
      .withMessage("Please select sip-profile."),
    check("trunk").not().isEmpty().withMessage("Please select trunk"),
    check("role").not().isEmpty().withMessage("Please select role"),
    check("channel").not().isEmpty().withMessage("Channel is required"),
  ],
  async (req, res, next) => {
    console.log("req", req.body);
    const errors = validationResult(req).array();
    const extractedErrors = [];
    if (errors.length > 0) {
      console.log("errors---", errors);
      errors.map((err) => extractedErrors.push({ [err.path]: err.msg }));
      return res.status(400).json({ error: extractedErrors });
    } else {
      console.log("out");
      let companyDetails = new companyModel({
        userType: req.body.userType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: common.getEncrytedPwd(req.body.password),
        companyName: req.body.companyName,
        timezone: req.body.timezone,
        sipprofile: req.body.sipprofile,
        role: req.body.role,
        trunk: req.body.trunk,
        channel: req.body.channel,
        domain: req.body.domain,
        address: req.body.address,
        city: req.body.city,
        contactNumber: req.body.contactNumber,
        state: req.body.state,
        pincode: req.body.pincode,
        country: req.body.country,
        policyAccepted: req.body.policyAccepted,
        status: req.body.status,
        createdAt: Date.now(),
        isVerified: req.body.userType == 0 ? 1 : 0,
        verificationToken: common.generateToken(), //Math.random().toString(36).substring(2, 30) + Math.random().toString(36).substring(2, 30)
      });
      if (req.body.userType == 0) {
        await companyDetails
          .save()
          .then(() => {
            return res.json({
              message: "Company added successfully ",
              status: 200,
            });
          })
          .catch((err) => {
            console.log("errrr---", err);
            return res.json({
              error: "Data not saved successfully",
              status: 400,
            });
          });
      }
    }
  }
);
router.get("/search", (req, res) => {
  console.log(89232333232);
  const {
    firstName,
    lastName,
    companyName,
    userName,
    email,
    sipprofile,
    trunk,
    status,
    channel,
    domain,
  } = req.query;

  const query = {};

  if (firstName) {
    query.firstName = { $regex: firstName, $options: "i" };
  }

  if (lastName) {
    query.lastName = { $regex: lastName, $options: "i" };
  }

  if (companyName) {
    query.company_name = { $regex: companyName, $options: "i" };
  }

  if (userName) {
    query.username = { $regex: userName, $options: "i" };
  }

  if (email) {
    query.email = { $regex: email, $options: "i" };
  }

  if (sipprofile) {
    query.sipprofile = sipprofile;
  }

  if (trunk) {
    query.trunk = trunk;
  }

  if (status) {
    query.status = status;
  }

  if (channel) {
    query.channel = { $regex: channel, $options: "i" };
  }

  if (domain) {
    query.domain = { $regex: domain, $options: "i" };
  }

  Company.find(query)
    .then((companies) => {
      res.json(companies);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;
