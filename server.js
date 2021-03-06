var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

app.listen(8010, function(){
    console.log('Listening on:8010');
});
