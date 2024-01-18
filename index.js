import express from "express";
import bodyParser from "body-parser";
import { JSDOM } from 'jsdom';

const app = express();
const port = 3000;

// constant declaration to interact with DOM through node
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});
app.get("/account", (req, res) => {
  res.render("signup.ejs");  
});

app.get("/signin", (req, res) => {
  // Dummy Logic to authenticate and render posts.ejs
  res.render("posts.ejs");
});

app.get("/subscription-sent", (req, res) => {
  var emailInput = document.getElementById("subscription-email");
  var privacyCheckBox = document.getElementById("privacy-checkbox");

  if (emailInput && privacyCheckBox.checked) {
    // Both conditions are met, render "index.ejs"
    res.render("index.ejs");
  } else {
    
  }
});
app.get("/posts", (req, res) => {
  res.render("posts.ejs");
});

app.get("/subscribe", (req, res) => {
  res.render("subscribe.ejs");
});

app.get("/delete", (req, res) => {
  res.render("delete.ejs");
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs");
});

app.get("/create-post", (req, res) => {
  res.render("create.ejs");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


