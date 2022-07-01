const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req,res){
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></html>');
        res.write('<body><form action = "/message" method = "POST"><input type ="text" name="message"><button type="submit">Send</button></body>');
        res.write('</html>');
        return res.end()
    }
    if(url === '/message' && method==='POST'){
        fs.writeFileSync('message.txt','Dummy')
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
      
        };
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Node js Server</title></html>');
    res.write('<body>Welcome to my Node JS project</body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);


