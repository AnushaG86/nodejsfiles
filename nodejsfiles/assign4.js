var http=require('http');
var server =http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hello");

});


server.listen(3000,'127.0.0.1');
console.log("Success i'm listening from port:3000");