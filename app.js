var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

//Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myapp');

//API specification
var api = express.Router();
var greetings = require('./routes/greetings');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

api.get('/', function (req, res) {
  res.json({message: 'Hello world api'});
});

api.use('/greetings', greetings);

app.use('/api', api)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log('myapp listening on port ' + port + '!');
});
