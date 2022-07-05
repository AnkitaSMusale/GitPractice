const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/addproduct',(req,res,next)=>{
    //res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"> <input type="text" name="quantity" placeholder="Add quantity here..."><button type="Submit">Add product</button></form>')
    //res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
})

router.post('/admin/addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})


module.exports = router;