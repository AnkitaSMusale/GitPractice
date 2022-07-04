const express = require('express');
const router1 = express.Router();

router1.get('/shop/',(req,res,next)=>{
    res.send( '<h1>Hello from Express JS</h1>')
})

module.exports = router1;