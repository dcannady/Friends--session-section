var mongoose = require('mongoose');
var session = require('../controllers/session.js');

module.exports = function(app){
    app.get('/login', session.index)

}
