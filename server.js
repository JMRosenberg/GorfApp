var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('Deez Nutz!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
