var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(req, res){
  return{
    login: function(req, res){
      User.findOne({name: req.body.name}, function(err, user){
        if(err){
          console.log(err);
          res.json(err);
        } else {
          if(!user){
            var newUser = new User(req.body);
            newUser.save(function(err.data){
              req.session.user = newUser;
              req.session.save();
              res.json(data);
            });
          }else{
            req.session.user = user;
            req.session.save();
            req.json(user);
          }
        }
        }
      })
    }
  }
})
