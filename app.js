var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home")
})

app.get("/love/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function (req, res) {
    var posts = [
        {title: "Post 1", author: "ray"},
        {title: "yes", author: "stark"},
        {title: "tell me more", author: "colt"}
    ];
    res.render("posts", {posts: posts});
})

app.listen(8080, function () {
    console.log("app is running");
});