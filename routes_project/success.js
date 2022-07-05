const path = require('path');

const express = require('express');
const router1 = express.Router();

const rootDir = require('../util/path');

router1.get('/success',(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','success.html'));
})

module.exports = router1;