//required modules
var express = require("express");
var app = express();
var http = require("http");

//dependency injection
var config = require("./config.js");
var myRoutes = require("./routes/myRoutes.js");

//routing logic
app.get('/login/:username/:password', myRoutes.login);
app.get('*', myRoutes.defaultPage);

//server listening in port
app.listen(config.port, function(){
   console.log('Express server listening on port ' ,config.port);
});
