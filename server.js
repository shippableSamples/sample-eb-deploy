var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();
var favicon = require('serve-favicon');

app.use(favicon('public/resources/images/nodejs.ico'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.get("/public/*", function (req, res) {
  res.sendFile(__dirname + req.originalUrl );
});
app.get("/", function (req, res) {
  res.render("/public/index.html");
});

app.listen(process.env.PORT || 3000 , function () {
  console.log('Express listening on port ' + process.env.PORT + ' or 3000');
});
