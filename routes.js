const fs = require('fs');

const requestHandler = (req,res)=>{

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
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[0];
            fs.writeFileSync('message.txt',message,err => {
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
            //fs.readFile('message.txt',function(err,message){
            //console.log(message.toString());
            });
        };
        //fs.writeFileSync('message.txt','Dummy');
       // res.statusCode=302;
       // res.setHeader('Location','/');
       // return res.end();
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Node js Server</title></html>');
    res.write('<body>Welcome to my Node JS project</body>');
    res.write('</html>');
    res.end();
}

//syntax1
module.exports = requestHandler;

//syntax2
//module.exports = {
//    handler : requestHandler,
//    someText : 'Some hard text'
//}

//syntax3
//module.exports.handler = requestHandler
//module.exports.someText = 'Work hard'

//syntax4
//exports.handler = requestHandler
//exports.someText = 'Work hard'