var config = require("../config/db");
var jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, config.secret, function(err, decoded) {
      if (decoded) {
        req.userData = decoded;
        next();
      } else {
        return next({ status: 401, message: "Please Log In First" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Please Log In First" });
  }
};

exports.ensureEditor = function(req, res, next) {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, config.secret, function(err, decoded) {
      if (decoded && decoded.authority === 'editor') {
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};

exports.ensureWriter = function(req, res, next) {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, config.secret, function(err, decoded) {
      if (decoded && decoded.authority === 'writer') {
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};