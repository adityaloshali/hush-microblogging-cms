const express = require("express");
const router = express.Router();
const db = require("../models");
const { getBlogs, getBlog, deleteBlog, updateBlog, createBlog } = require("../controllers/writer");

router.get("/", getBlogs);

router.post("/new", createBlog);

router.get("/:id", getBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);


module.exports = router;