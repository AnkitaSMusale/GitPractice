const express = require('express');
const router2 = express.Router();

router2.get('/login',(req,res,next)=>{
    res.send('<form onsubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" id="my_form" method="POST"><label for="name">Username : </label><input type="text" id="username" name="username"><button type="Submit">Add</button></form>')
})

router2.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router2;