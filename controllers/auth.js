const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/db");

exports.signin = async function(req, res, next) {
  // finding a user
  try {
    let user = await db.User.findOne({
      username: req.body.username
    });
    let { id, username, authority } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          authority
        },
        config.secret,
        { expiresIn: '24h' }
      );
      res.status(200).json({
        success: true,
        message: "Login Success!",
        id,
        username,
        authority,
        token
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Password."
      });
    }
  } catch (e) {
    res.json({ success: false, message: err });
  }
};

//signup
exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Account Registered!"
    });
  } catch (err) {
    // Check if error is an error indicating duplicate account
    if (err.code === 11000) {
      res.json({ success: false, message: 'Username already exists' }); // Return error
    } else {
      // Check if error is a validation rror
      if (err.errors) {
          // Check if validation error is in the username field
          if (err.errors.username) {
            res.json({ success: false, message: err.errors.username.message }); // Return error
          } else {
            // Check if validation error is in the password field
            if (err.errors.password) {
              res.json({ success: false, message: err.errors.password.message }); // Return error
            } else {
              res.json({ success: false, message: err }); // Return any other error not already covered
            }
          }
      } else {
        res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
      }
    }
  }
};
