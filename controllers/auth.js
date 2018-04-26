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
        config.secret
      );
      return res.status(200).json({
        success: true,
        message: "Login Success!",
        id,
        username,
        authority,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password."
      });
    }
  } catch (e) {
    return next({ status: 400, message: "Invalid Email/Password." });
  }
};

//signup
exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, authority } = user;
    console.log(config.secret);
    let token = jwt.sign(
      {
        id,
        username,
        authority
      },
      config.secret
    );
    return res.status(200).json({
      success: true,
      message: "Account Registered!",
      id,
      username,
      authority,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
