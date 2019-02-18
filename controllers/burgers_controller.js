var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Index redirect
router.get('/', function (req, res){
    res.redirect('/index');
});

// Index Page (render all burgers to DOM)
router.get('/index', function (req, res){
    burger.selectAll(function(data){
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// Create a new burger 
router.post('/burger/create', function (req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect('/index');
    });
});

// Devour a Burger
router.post('/burger/eat/:id', function(req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');
    });
});

module.exports = router;