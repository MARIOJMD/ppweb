var http = require('http');//inteccion de dependencia
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html'});//los hedears
  var html = fs.readFileSync('./index.htm');
  res.end(html);
}).listen(1337, '127.0.0.1');
