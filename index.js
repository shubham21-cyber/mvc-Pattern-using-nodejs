//include Packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const Router = require("./routes/myroutes");
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//use all Routes in main file
app.use(Router);

//serve css or external file here for web pages
app.use(express.static(path.join(__dirname, "public")));

app.listen("3000", function () {
  console.log("server started on PORT no 3000");
});
