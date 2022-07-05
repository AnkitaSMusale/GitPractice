const path = require('path');

const express = require('express');
const router1 = express.Router();

const rootDir = require('../util/path');

router1.get('/shop',(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router1;