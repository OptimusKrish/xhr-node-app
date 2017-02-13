var fs = require("fs");
var myRoutes = {};
var config = require("../config.js");

//to check login based on parameters
myRoutes.login = function(req, res) {
  var userInfo = {};

  try {

    userInfo.Username = req.params.username;
    userInfo.Password = req.params.password;

    //to store user info into file on disk
    fs.appendFile(config.userInfo, JSON.stringify(userInfo), function(err) {
    if (err) throw err;
      console.log('User info added!');
    });
    res.send('200');
  }
  catch(err) {
    console.log('Server error:', err);
    res.send('500');
  }

};

//to display default error message for incorrect routes
myRoutes.defaultPage = function(req, res) {
 res.send('Error: 404, Page not found :-(');
};

module.exports = myRoutes;
