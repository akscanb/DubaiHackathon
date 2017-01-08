exports = module.exports = function (express, app){
  //Base Setup for use in the database

  var bodyParser = require('body-parser');
  var User = require('./models/users.js');

  //Routes Setup

  var router = express.Router();
  //middleware to use for all requests
  router.use(bodyParser.urlencoded({extended: true}));
  router.use(bodyParser.json());

  router.use(function(req, res, next){
    //do logging here
    console.log('Api request!');
    next();//this make sures to go to the next route and doesn't get stuck here
  })
  //test route to make sure things are working
  router.get('/', function(req, res){
    res.json({ message: 'hooray! welcome to our api'})
  })

  router.route('/users')
    .post(function(req,res){
      User.count({publicId:req.body.publicId.toLowerCase()}, function(err,count){
        if(count>0){
          res.json({message:'User Already Exists!'});
        }else{
          console.log(req.body);
          var user = new User();
          user.name = req.body.name;
          user.publicId = req.body.publicId.toLowerCase();
          user.monthlyWattage = req.body.wattage;
          user.subsidy = req.body.subsidy;
          user.citizenship = req.body.citizenship;
          user.save(function(err) {
            if (err)
              res.send(err);
            res.json({message: 'User Registered!'})
          });
        }
      })

    })

    //get all user accounts
    .get(function(req, res){
      User.find(function(err, users){
        if (err)
          res.send(err)
        res.json(users);
      })
    })
  router.route('/users/:publicId')
    //get the user with the id(accessed at GET http://localhost:8080/api/:publicId)
    .get(function(req, res){
      console.log(req.params.publicId)
      User.find({publicId:req.params.publicId}, function(err, user){
        if(err)
          res.send(err);
        console.log(user[0]);
        res.json(user[0]);
      })
    })
    //update the user with this id(accessed at PUT http://localhost:8080/api/user/:publicId)
    .put(function(req,res) {
      User.find({publicId:req.params.publicId}, function(err, user){
        if (err)
          res.send(err);
        user[0].subsidy = req.body.subsidy
        user[0].monthlyWattage = req.body.wattage;
        user[0].subsidy = req.body.subsidy;
        user[0].citizenship = req.body.citizenship;
        user[0].save(function(err){
          if(err)
            res.send(err);

          res.json({message: 'User updated!'});
        });
      });
    });



  //Register our routes
  app.use('/api', router)



}
