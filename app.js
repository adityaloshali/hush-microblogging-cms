const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path'); // NodeJS Package for file paths

const authRoutes = require("./routes/auth");
const writerRoutes = require("./routes/writer");
const editorRoutes = require("./routes/editor");
const getBlogsRoute = require("./routes/getAll");
const categoriesRoutes = require("./routes/categories");
const awsKeysRoute = require("./routes/awsKeys");
const { loginRequired, ensureEditor, ensureWriter } = require("./middlewares/auth");

mongoose.connect("mongodb://localhost/hushapi", {
  }, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
      console.log('Connected to HushApi'); // Return success message
    }
  });
  
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");
//to declare public folder as the host of static files like css
app.use(express.static(__dirname + '/public')); // Provide static directory for frontend
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.use("/api/auth", authRoutes);
app.use("/api/writer", loginRequired, ensureWriter, writerRoutes);
app.use("/api/editor", loginRequired, ensureEditor, editorRoutes);
app.use("/api/getBlogs", getBlogsRoute);
app.use("/api/categories", loginRequired, categoriesRoutes);
app.use("/api/awskeys", loginRequired, awsKeysRoute);

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message || "Oops!, something went wrong!"
        }
    });
});

module.exports = app;
  
