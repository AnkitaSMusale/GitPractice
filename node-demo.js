const http = require('http');
const server = http.createServer(function (req,res){
    console.log(req);
    console.log('Ankita');
    res.setHeader('Content-Type', 'text/plain')
    res.write('Ankita');
    res.end();
})
server.listen(4000);

