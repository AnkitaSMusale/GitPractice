const path = require('path');

const express = require('express');
const router1 = express.Router();

const rootDir = require('../util/path');

router1.get('/shop',(req,res,next)=>{
   // res.send( '<h1>Hello from Express JS</h1>')
   res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router1;