const db = require("../models");

exports.getCategories = function(req, res){

    db.Category.find({ categories: { "$in" : ["management"]}},(err, categories) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err }); // Return error message
        } else {
          // Check if blogs were found in database
          if (!categories) {
            res.json({ success: false, message: 'No Record found.' }); // Return error of no blogs found
          } else {
            res.json({ success: true, categories: categories[0].categories }); // Return success and blogs array
          }
        }
      }); 
}

exports.createCategory = function(req,res){
    console.log("route reached");
    console.log(req.body);
    console.log(req.body.category);

    db.Category.find({ categories: { "$in" : ["management"]}},(err, categories) => {
        // Check if error was found or not
        if (err) {

          res.json({ success: false, message: err }); // Return error message
        } else {
          // Check if blogs were found in database
          if (!categories) {
            res.json({ success: false, message: 'No Record found.' }); // Return error of no blogs found
          } else {
            
            if(categories[0]){
              categories[0].categories.push(req.body.category);
              categories[0].save();
              res.json({ success: true, message: 'A new category was inserted in the DB' });
            }else{
              const category = new db.Category({
                  "categories" : ["management","career","employment","upskilling", req.body.category]
              });
          
              // Save blog into database
              category.save((err) => {
                  // Check if error
                  if (err) {
                      res.json({ success: false, message: err }); // Return general error message
                  } else {
                    res.json({ success: true, message: 'Categories DB created, including new category' }); // Return success message
                  }
                });
            }
            //console.log(categories[0]);
            //categories[0].categories.push(req.body.category);
            //categories[0].save();
            //res.json({ success: true, categories: categories[0].categories });
          }
        }
      });

}