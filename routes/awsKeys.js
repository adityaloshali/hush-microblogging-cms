const express = require("express");
const router = express.Router();
const awskeys = require("../config/awskeys");

router.get("/",function(req, res){
    res.json({ success: true, keys: awskeys });
});

module.exports = router;