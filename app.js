const express = require("express");
const path = require("path");
const app = express();
var mongoose = require("mongoose");
const bodyparser = require("body-parser");
mongoose.connect("mongodb://localhost/contactAcademy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = 8000;

// DEFINE MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});
var contact = mongoose.model("Contact", contactSchema); // compiling schema => model

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});

app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});

// about page
app.get("/about", (req, res) => {
  const params = {};
  res.status(200).render("about.pug", params);
});

app.get("/agents", (req, res) => {
  const params = {};
  res.status(200).render("agents.pug", params);
});

app.get("/arsenal", (req, res) => {
  const params = {};
  res.status(200).render("arsenal.pug", params);
});

// For whatever data we get into contacts
app.post("/contact", (req, res) => {
  var myData = new contact(req.body); // making a new myData obj
  // .save will return a promise hence we write .then to handle it
  myData
    .save()
    .then(() => {
      // res.send("This item has been saved to database");
      res.render("saved.pug");
    })
    .catch(() => {
      res.status(400).send("Item not saved");
    });
  //res.status(200).render("contact.pug"); We have to comment this line because we have already send and we are trying to send again using status 200
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
