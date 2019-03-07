var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/burgers", function(req, res){
    burger.add(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data){
        res.redirect('/burgers')
    });
});

router.put("/burgers/:id",function(req, res){
    var condition = "id =" + req.params.id;
    burger.update({"devoured" : req.body.devoured}, condition, function(data){
        res.redirect("/burgers");
    });
});
module.exports = router;