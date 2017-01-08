var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
              replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri ='mongodb://andrewkoh:andrewkoh@ds157268.mlab.com:57268/anotherone';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;


var app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

require('./server/main.js')(server);
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.
  require('./apiroutes')(express, app);
  //require('./server/database.js')(server);
  console.log('apiserver connected!')
});
