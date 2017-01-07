exports = module.exports = function (express, app){
  //Base Setup for use in the database

  var bodyParser = require('body-parser');
  var User = require('./server/model');

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
      console.log(req.body);
      var user = new User();
      user.name = req.body.name;
      user.publicId = '0';
      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({message: 'User Registered!'})
      });
    });


  //Register our routes
  app.use('/api', router)



}
