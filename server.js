// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require("useragent");
 
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (req, res) {  
  var agent = useragent.parse(req.get("User-Agent"));
  
  res.json({ IP: req.ip, System: agent.os.toString(), Language: (req.get("Accept-Language") || "").split(";")[0] || "" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
