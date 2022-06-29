const http = require('http');
const server = http.createServer(function (req,res){
    console.log(req);
    console.log('Ankita');

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Node js Server</title></html>');
    res.write('<body>Hello from my Node JS Server</body>');
    res.write('</html>');
    res.end();
})
server.listen(4000);


