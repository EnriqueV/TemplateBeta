var express = require('express');
var app = express();
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

http.listen(process.env.PORT || 3000,function(){
console.log('The server listen to %s',PORT);
});
