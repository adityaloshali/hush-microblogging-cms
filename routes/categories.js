const express = require("express");
const router = express.Router();
const db = require("../models");
const { getCategories, createCategory} = require("../controllers/categories");

router.get("/", getCategories);

router.post("/createCategories",function(req, res){

    const category = new db.Category({
        "categories" : ["management","career","employment","upskilling"] 
    });

    // Save blog into database
    category.save((err) => {
        // Check if error
        if (err) {
            res.json({ success: false, message: err }); // Return general error message
        } else {
          res.json({ success: true, message: 'Categories DB created' }); // Return success message
        }
      });


});

router.post("/", createCategory);

module.exports = router;