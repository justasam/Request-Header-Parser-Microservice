// server.js


// init project
var express = require('express');
var app = express();



app.get("/", function (req, res) {
  res.send({ipaddress: req.get("x-forwarded-for").split(",")[0], language: req.get("accept-language").split(",")[0], software: req.get("user-agent").split("(")[1].split(")")[0]});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

