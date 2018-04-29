const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", function(req, res){
    // Search database for all blog posts
    db.Blog.find({status:1}, (err, blogs) => {
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
      }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
});

module.exports = router;