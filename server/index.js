var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Pusher = require('pusher');
const path = require('path');

var pusher = new Pusher({
    appId: '1080185',
    key: '11b4ad3a39f15ba40603',
    secret: '708433812a473d1a03d7',
    cluster: 'eu',
    encrypted: true
  });
  

console.log("server is running");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(express.static(path.resolve('build/')));   


app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

app.post('/pusher/send', function(req, res) { 
    pusher.trigger('public-channel', 'message', {
        'message': req.message
    });
});
  
var port = process.env.PORT || 5000;


app.listen(port);

