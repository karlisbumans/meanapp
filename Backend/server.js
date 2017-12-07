var express  = require('express');
                              // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
//var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var user = require('./routes/userRoute');
var nconf = require('nconf');
var methodOverride = require('method-override');

var app = express();

app.use('/',cors());
app.use('/api/user', cors());

app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(methodOverride());
app.use('/api/user', user);

// listen (start app with node server.js) ======================================
app.listen(8080,'127.0.0.1');
console.log("App listening on port 8080");

mongoose.connect('mongodb://127.0.0.1:27017/meanapp');     // MongoDB Connection



