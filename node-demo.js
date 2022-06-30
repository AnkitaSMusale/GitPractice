const http = require('http');
const routes = require('./routes');

//syntax1
const server = http.createServer(routes);

//syntax2/3/4
//console.log(routes.someText);
//const server = http.createServer(routes.handler); 

server.listen(3000);
