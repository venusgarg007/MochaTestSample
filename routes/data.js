var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  var myObj = {"name" : "Amit", "age" : "26", "location" : "Bangalore"};
  res.send(myObj);
});

router.get('/js', function(req, res, next){
  var myObj = {"product" : "Mobile", "price" : "12000"};
  res.send(myObj);
});

module.exports = router;
