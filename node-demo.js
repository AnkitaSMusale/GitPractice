const path = require('path');

const express = require('express');
const fs = require('fs');

const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname,'public')))

const adminRouter = require('./routes_project/admin')
const shopRouter = require('./routes_project/shop');
const ContactUsRouter = require('./routes_project/ContactUs')
const SuccessRouter = require('./routes_project/success')
//const loginRouter = require('./routes_project/login')
//const sendmsgRouter = require('./routes_project/msg')

app.use(bodyparser.urlencoded({extended : false}));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(ContactUsRouter);
app.use(SuccessRouter);
//app.use(loginRouter);
//app.use(sendmsgRouter);

   
app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(7000);
//const http = require('http');
//const routes = require('./routes');

//syntax1
//const server = http.createServer(app);

//syntax2/3/4
//console.log(routes.someText);
//const server = http.createServer(routes.handler); 

//server.listen(3000);


/*const http = require('http');
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
server.listen(3000);*/


/*const http = require('http');
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
*/

/*const http = require('http');
const server = http.createServer(function (req,res){
    console.log(req);
    console.log('Ankita');
    res.setHeader('Content-Type', 'text/plain')
    res.write('Ankita');
    res.end();
})
server.listen(4000);*/

/*const http = require('http');
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
server.listen(4000);*/


/*async function helper(){
    console.log('a');
    console.log('b');
    const promise1 = await new Promise((resolve,reject) => {
         setTimeout(() => resolve('c'), 3000)
    })
    console.log(promise1);
    const promise2 = await new Promise((resolve,reject) => {
         setTimeout(() => resolve('d'), 0)
    })
    console.log(promise2);
    console.log('e');
}
helper();
//promises.then
    console.log('a');
    console.log('b');
    let promise1 = new Promise((resolve) => {
         setTimeout(() => resolve(console.log('c'), 3000))
    })
    let promise2 =  new Promise((resolve) => {
         setTimeout(() => resolve(console.log('d'), 0))
    })
    promise1.then(promise2.then(()=> {console.log('e')}));*/
    



/*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	const { key1, key3}  = { ...obj1}
    	console.log(key1, key3)

        const arr1 = ['value1', 'value2']

        const [ val1, val2 ] = arr1
    
    
    
        console.log(val1)
    
        console.log(val2)

        const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

        let { key1, key3}  = obj1
        key1 = 20;
    
        key3 = 123
        //console.log(key1,key3);
        console.log(obj1.key1, obj1.key3)*/
/*console.log('Hello World');

const product = (a,b) => {
    return a*b ;
} 

console.log(product(2,3));

const student = {
    name : 'John',
    age : 28,
    details() {
        console.log('Hi I am ' + this.name);
    }
}
student.details(); */

/* const fruits = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];

const print = fruits.filter(function (fruit) {
    if(fruit !== (''))
        return true;
   // return false;    
}).map(function(fruit){return fruit;})


console.log(print);   //new array
console.log(fruits);    //original array

console.log('**********')
const obj1 = {'key1': 1}
console.log(obj1);
const obj2 = { ...obj1}
console.log(obj2);
if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}


console.log('**********')
const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj3, key1: 1000}



console.log(obj3)

console.log(obj4) */



