const express = require("express");
const router = express.Router();
let mongodbObjectId = require('mongodb').ObjectId;


const companyModel = require("./Models/registration");
const { check, validationResult } = require("express-validator");
const common = require("./Helpers/common");
router.get("/list", async (req, res) => {
  try {
    //const companies = await companyModel.find({ isDeleted: 0 }).exec();
    const companies = await companyModel.find().exec();
    res.json({ companies: companies, status: 200 });
  } catch (error) {
    console.error("Error fetching book data:", error);
    res.json({ error: "Internal server error", status: 500 });
  }
});
router.post(
  "/add",
  [
    check("firstName").not().isEmpty().withMessage("Username is required"),
    check("lastName").not().isEmpty().withMessage("Lastname is required"),
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
    // check("sipprofile")
    //   .not()
    //   .isEmpty()
    //   .withMessage("Please select sip-profile."),
    // check("trunk").not().isEmpty().withMessage("Please select trunk"),
    // check("role").not().isEmpty().withMessage("Please select role"),
    check("channel").not().isEmpty().withMessage("Channel is required"),
  ],
  async (req, res, next) => {
    console.log("req-add", req.body);
    const errors = validationResult(req).array();
    const extractedErrors = [];
    if (errors.length > 0) {
      console.log("errors---", errors);
      errors.map((err) => extractedErrors.push({ [err.path]: err.msg }));
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
  console.log("req", req.query);
  const searchObject = req.query;
  const query = {};

  for (const key in searchObject) {
    // console.log("searchObject",searchObject);
    // console.log("key----",key);
    // console.log("searchObjectlkkk",searchObject[key]);
    const { value, fieldName, [fieldName]: fieldValue } = searchObject[key];

    switch (value) {
      case "begin":
        query[fieldName] = { $regex: `^${fieldValue}`, $options: "i" };
        break;
      case "end":
        query[fieldName] = { $regex: `${fieldValue}$`, $options: "i" };
        break;
      case "contains":
        query[fieldName] = { $regex: fieldValue, $options: "i" };
        break;
      default:
        query[fieldName] = fieldValue.toString();
        break;
    }
  }
  console.log("query----", query);
  companyModel
    .find(query)
    .then((companies) => {
      console.log(companies);
      res.json({ companies: companies, status: 200 });
      // res.json(companies);
    })
    .catch((err) => {
      res.json({ error: err.message, status: 400 });
    });
});
router.put("/updateStatus/:id", async (req, res) => {
  const _id = req.params.id;
  const { status } = req.body;
  console.log("req.body:", req.params);
  // Update status in the database
  try {
    const updatedDocument = await companyModel.findByIdAndUpdate(
      _id,
      { status },
      { new: true }
    );
    return res.json({
      message: "Status updated successfully ",
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.json({
      error: "Something went wrong ",
      status: 404,
    });
  }
});
router.put("/deleteSingle/:id", async (req, res) => {
  const _id = req.params.id;
  console.log("req.body:", req.params);
  try {
    const updatedDocument = await companyModel.findByIdAndUpdate(_id, {
      isDeleted: true,
    });
    return res.json({
      message: "Deleted successfully ",
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.json({
      error: "Something went wrong ",
      status: 404,
    });
  }
});
router.put(
  "/editcompany/:id",
  [
    check("firstName").not().isEmpty().withMessage("Firstname is required"),
    check("lastName").not().isEmpty().withMessage("Lastname is required"),
    check("userName").not().isEmpty().withMessage("Username is required"),
    check("domain").not().isEmpty().withMessage("Domain is required"),
    check("email", "Email is required").isEmail(),
    // .custom(async (email) => {
    //   const value = await common.emailExits(companyModel, "email", email);
    //   if (value) {
    //     throw new Error("Email is already exists!!!");
    //   }
    // }),
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
    // check("userName", "Username is required").custom(async (userName) => {
    //   const value = await common.fieldExists(
    //     companyModel,
    //     "userName",
    //     userName
    //   );
    //   if (value) {
    //     throw new Error("Username is already exists!!!");
    //   }
    // }),
    // check("domain", "Domain is required").custom(async (domain) => {
    //   const value = await common.fieldExists(companyModel, "domain", domain);
    //   if (value) {
    //     throw new Error("Domain is already exists!!!");
    //   }
    // }),
    // check("sipprofile")
    //   .not()
    //   .isEmpty()
    //   .withMessage("Please select sip-profile."),
    // check("trunk").not().isEmpty().withMessage("Please select trunk"),
    // check("role").not().isEmpty().withMessage("Please select role"),
    check("channel").not().isEmpty().withMessage("Channel is required"),
  ],
  async (req, res) => {
    console.log("req.body", req.body);
    const companyId = req.params.id;
    console.log("_id", companyId);
    const errors = validationResult(req).array();
    const extractedErrors = [];
    if (errors.length > 0) {
      console.log("errors---", errors);
      errors.map((err) => extractedErrors.push({ [err.path]: err.msg }));
      return res.status(400).json({ error: extractedErrors });
    } else {
      console.log("out");
     
      try {
        const result = await companyModel.findOneAndUpdate(
          { companyId: companyId }, // Find the document based on companyId
          {
            $set: { 
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
              updatedAt: Date.now(),
            }
          },
          { new: true } // Return the updated document after the update is applied
        );
      
        console.log(result, "HARSH");
        if (result) {
          return res.json({
            message: "Company updated successfully",
            status: 200,
          });
        } else {
          return res.json({
            error: "Company not found or data not updated",
            status: 400,
          });
        }
      } catch (err) {
        console.log("Error:", err);
        return res.json({
          error: "An error occurred while updating the company",
          status: 500,
        });
      }
    }
  }
);
module.exports = router;
