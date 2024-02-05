
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const newItems = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    const day = date.getDate();
    res.render("list", {kindOfDay: day, newListItems: newItems});
});

app.post("/", function(req, res){
    newItem = req.body.item;
    newItems.push(newItem);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Running!");
});