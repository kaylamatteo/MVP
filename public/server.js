//Lets require/import the HTTP module
// var http = require('http');
// var fs = require('fs');
// var express = require('express');

// const PORT=8080; 

// function handleRequest(request, response){

//     response.end('It Works!! Path Hit: ' + request.url);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);