var express = require('express');
var router = express.Router();
var Greeting = require('../models/greeting');

router.get('/', function(req, res) {
    Greeting.find({}, function(err, users) {
        if (err) throw err;
        res.json(users);
    });
});

router.post('/', function(req, res) {
    var message = req.body.message;
    if(!message) return new Error('Greeting is empty');
    var newGreeting = Greeting({
      message: message
    });
    newGreeting.save(function(err) {
      if (err) throw err;
      console.log('Greeting created!');
      res.json('Greeting created!');
  })
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    Greeting.findById(id, function(err, user) {
      if (err) throw err;
      res.json(user);
    });
});

module.exports = router;
