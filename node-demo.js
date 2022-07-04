const express = require('express');

const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const app = express();

const adminRouter = require('./routes_project/admin')
const shopRouter = require('./routes_project/shop');

app.use(bodyparser.urlencoded({extended : false}));

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);

app.use('/',(req,res,next)=>{
    res.status(404).send( '<h1>Page Not Found</h1>')
})

app.listen(3000);
