const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categories: [String]
  });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;