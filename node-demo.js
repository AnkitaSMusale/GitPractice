const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');

app.use(bodyparser.urlencoded({extended : false}));

app.use('/addproduct',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="text" name="quantity" placeholder="Add quantity here..."><button type="Submit">Add product</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send( '<h1>Hello from Express JS</h1>')
})
app.listen(3000);

