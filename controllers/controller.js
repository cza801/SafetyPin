var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
	res.redirect("/signIn")
});

router.get("/signIn", function(req, res) {
	res.render("signin")
});

router.get("/dashboard", function(req, res) {
	res.render("dashboard")
});

router.get("/send.handlebars", function(req, res) {
    res.render("send.handlebars")
});

module.exports = router;