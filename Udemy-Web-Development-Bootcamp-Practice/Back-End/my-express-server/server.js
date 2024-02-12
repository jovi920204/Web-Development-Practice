// jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: jovi920204@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Name: Jovi Chang <br> School: NTUST TW");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coding</li><li>Eating</li></ul>")
});

app.listen(port, function(){
    console.log("Server started on port 3000");
});


