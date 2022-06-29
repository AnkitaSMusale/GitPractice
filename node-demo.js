
const http = require('http');
const server = http.createServer(function (req,res){
    console.log(req.url ,req.method);
    console.log('Ankita');
    res.setHeader('Content-Type', 'text/html')
    if(req.url === '/home'){
        res.write('<html>');
        res.write('<head><title>Node js Server</title></html>');
        res.write('<body>Welcome home</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>Node js Server</title></html>');
        res.write('<body>Welcome to About Us page</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node js Server</title></html>');
        res.write('<body>Welcome to my Node JS project</body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.write('<html>');
        res.write('<head><title>Node js Server</title></html>');
        res.write('<body>Hello</body>');
        res.write('</html>');
        return res.end();
    }
})
server.listen(4000);



