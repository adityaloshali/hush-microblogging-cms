const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = require("./user");

let contentLengthChecker = (content) => {
  // Check if content exists
  if (!content) {
    return false; // Return error
  } else {
    // Check length of content string
    let contentLength = content.trim().split(" ").length;
    if (contentLength < 3 || contentLength > 150) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid username
    }
  }
};

// Array of Content validators
const contentValidators = [
  // First Body validator
  {
    validator: contentLengthChecker,
    message: 'Body must be more than 3 words and no greater than 150 words.'
  }
];

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
      validate: contentValidators
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
    tags: {
      type: Array,
      default: []
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