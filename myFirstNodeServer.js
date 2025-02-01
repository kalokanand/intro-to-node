var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res){
	var q = url.parse(req.url, true);
	console.log(q);
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming Request:"+req.url);
		res.end();
	})
}).listen(8080);
console.log("Server listening on Port 8080...");