const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/db");

exports.getBlogs = function(req, res){
    db.Blog.find({authorName:req.userData.username,status:{$in:[0,1]}},(err, blogs) => {
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
}

exports.createBlog = function(req, res){
    const blog = new db.Blog({
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        tags : req.body.tags,
        authorName: req.userData.username
       
    });

    console.log(req.body.title+" "+req.body.content+" ");

    // Save blog into database
    blog.save((err) => {
        // Check if error
        if (err) {
          if (err.errors) {
            // Check if validation error is in the content field
            if (err.errors.content) {
              res.json({ success: false, message: err.errors.content.message }); // Return error message
            }
          } else {
            res.json({ success: false, message: err }); // Return general error message
          }  
        } else {
          res.json({ success: true, message: 'Blog saved!' }); // Return success message
        }
      });
}

exports.getBlog = function(req, res){
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
      } else {
        // Check if the blog id is found in database

        db.Blog.findOne({ _id: req.params.id }, (err, blog) => {
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
}

exports.deleteBlog = function(req, res){
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
      } else {
        // Check if the blog id is found in database
  
        db.Blog.findOne({ _id: req.params.id }, (err, blog) => {
          // Check if the id is a valid ID
          if (err) {
            res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
          } else {
            // Check if blog was found by id
            if (!blog) {
                res.json({ success: false, message: 'Blog not found.' }); // Return error message
            } else {
                blog.remove((err) => {
                  if (err) {
                    res.json({ success: false, message: err }); // Return error message
                  } else {
                    res.json({ success: true, message: 'Blog deleted!' }); // Return success message
                  }
                });
            }
          }
        });
      }
  }

  exports.updateBlog = function(req, res){
    //Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
      } else {
        // Check if the blog id is found in database
        db.Blog.findOne({ _id: req.params.id }, (err, blog) => {
          // Check if the id is a valid ID
          if (err) {
            res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
          } else {
            // Check if blog was found by id
            if (!blog) {
                res.json({ success: false, message: 'Blog not found.' }); // Return error message
            } else {
                blog.title = req.body.title; // Save latest blog title
                blog.content = req.body.content; // Save latest body
                blog.imageUrl = req.body.imageUrl;
                blog.category = req.body.category;
                blog.status = req.body.status;
                blog.tags = req.body.tags;
                blog.save((err) => {
                    if (err) {
                      if (err.errors) {
                        // Check if validation error is in the content field
                        if (err.errors.content) {
                          res.json({ success: false, message: err.errors.content.message }); // Return error message
                        }
                      } else {
                        res.json({ success: false, message: err }); // Return general error message
                      }  
                    } else {
                        res.json({ success: true, message: 'Blog Updated!' }); // Return success message
                    }
                });
            }
          }
        });
      }

}