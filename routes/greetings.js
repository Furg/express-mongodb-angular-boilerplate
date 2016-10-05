var express = require('express');
var router = express.Router();
var Greeting = require('../models/greeting');

router.get('/', function(req, res) {
    Greeting.find({}, function(err, greeting) {
        if (err) res.json(greeting);
        res.json(greeting);
    });
});

router.post('/', function(req, res) {
    var message = req.body.message;
    if(!message) return res.sendStatus(204);
    var newGreeting = Greeting({
      message: message
    });
    newGreeting.save(function(err, greeting) {
      if (err) return res.sendStatus(304);
      console.log('Greeting created');
      res.json(greeting);
  })
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    Greeting.findById(id, function(err, user) {
      if (err) return res.sendStatus(404);
      res.json(user);
    });
});

router.delete('/:id', function(req, res){
    var id = req.params.id;
    Greeting.findByIdAndRemove(id, function(err) {
      if (err) return res.sendStatus(404);
      res.sendStatus(200);
    });
})

module.exports = router;
