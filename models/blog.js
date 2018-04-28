const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = require("./user");

const blogSchema = new mongoose.Schema(
  {
    _id: Number,
    title: { 
      type: String,
      required: true, 
    },
    content: { 
      type: String,
      required: true,
      //maxlength: 240
    },
    authorName: {
      type: String,
    },
    imageUrl:{
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    status: {
      type: Number,
      default: 0
    },
    createdAt: { 
      type: Date, 
      default: Date.now() 
    }
  }, { _id: false }  
);

blogSchema.plugin(AutoIncrement);
const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog;