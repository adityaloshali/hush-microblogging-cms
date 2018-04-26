const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const writerRoutes = require("./routes/writer");
const editorRoutes = require("./routes/editor");
const { loginRequired, ensureCorrectUser, ensureEditor } = require("./middlewares/auth");

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
app.use(express.static("public"));
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
app.use("/api/writer", loginRequired, writerRoutes);
app.use("/api/editor", loginRequired, ensureEditor, editorRoutes);

app.get("/api/:id", loginRequired ,function(req, res){
  console.log(req.params.id);
  console.log(req.query.hello);
  res.send("Hello");
  console.log("Hey");
  //console.log(req.userData);
});

app.get("/api/all/:id", loginRequired ,function(req, res){
  res.send("Hello");
  console.log("Hey");
  console.log(req.userData);
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
  
