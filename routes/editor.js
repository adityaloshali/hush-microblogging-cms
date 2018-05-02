const express = require("express");
const router = express.Router();
const db = require("../models");
const { getBlogs, getBlog, updateBlog } = require("../controllers/editor");

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.put("/:id", updateBlog);

module.exports = router;