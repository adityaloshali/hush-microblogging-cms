const mongoose = require("mongoose");
const User = require("./user");

const blogSchema = new mongoose.Schema(
  {
    title: { 
      type: String,
      required: true, 
    },
    content: { 
      type: String,
      required: true,
      maxlength: 240
    },
    authorName: {
      type: String,
      required: true
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
  }  
);

const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog;