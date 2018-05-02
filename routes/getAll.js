const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/",function(req, res){

    let query = null;
    if(req.query.title){
        req.query.title = {'$regex': req.query.title };
        query = req.query;
    }else{
        query = req.query;
    }

    db.Blog.find( query ,(err, blogs) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err }); // Return error message
        } else {
          // Check if blogs were found in database
          if (!blogs) {
            res.json({ success: false, message: 'No blogs found.' }); // Return error of no blogs found
          } else {
            res.json({ success: true, blogs: blogs }); // Return success and blogs array
          }
        }
      }).sort({ '_id': -1 }); 
});

module.exports = router;