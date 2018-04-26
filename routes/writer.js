const express = require("express");
const router = express.Router();
const db = require("../models");
const { signup, signin } = require("../controllers/auth");

router.get("/",function(req, res){
    db.Blog.find({authorName:req.userData.username},(err, blogs) => {
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

router.post("/new",function(req, res){
    const blog = new db.Blog({
        title: req.body.title,
        body: req.body.content,
        createdBy: req.userData.username
    });

    console.log(req.body.title+" "+req.body.content+" "+req.userData.username);

    // Save blog into database
    blog.save((err) => {
        // Check if error
        if (err) {
            res.json({ success: false, message: err }); // Return general error message
        } else {
          res.json({ success: true, message: 'Blog saved!' }); // Return success message
        }
      });
});

router.get("/:id",function(req, res){
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
      } else {
        // Check if the blog id is found in database
        Blog.findOne({ _id: req.params.id }, (err, blog) => {
          // Check if the id is a valid ID
          if (err) {
            res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
          } else {
            // Check if blog was found by id
            if (!blog) {
                res.json({ success: false, message: 'Blog not found.' }); // Return error message
            } else {
                res.json({ success: true, blog: blog }); 
            }
          }
        });
      }
});

router.put("/:id",function(req, res){
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
      } else {
        // Check if the blog id is found in database
        Blog.findOne({ _id: req.params.id }, (err, blog) => {
          // Check if the id is a valid ID
          if (err) {
            res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
          } else {
            // Check if blog was found by id
            if (!blog) {
                res.json({ success: false, message: 'Blog not found.' }); // Return error message
            } else {
                blog.title = req.body.title; // Save latest blog title
                blog.body = req.body.content; // Save latest body
                blog.save((err) => {
                    if (err) {
                        res.json({ success: false, message: err }); // Return error message
                    } else {
                        res.json({ success: true, message: 'Blog Updated!' }); // Return success message
                    }
                });
            }
          }
        });
      }

});


module.exports = router;