var finalhandler = require("finalhandler");
var router = require("router");
var http = require("http");
 
var server = http.createServer(function (req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(3000, function() {
    console.log("Hey, servernya hidup di 3000!!")
})