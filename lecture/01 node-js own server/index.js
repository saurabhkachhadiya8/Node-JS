const http = require('http');
http.createServer((req,res) => {
    res.write('<h1>Hello world</h1>');
    res.write('<p>Hello world</p>');
    res.end();
}).listen(8080,(err) => {
    if(err) console.log(err);
    console.log("server is running");
});