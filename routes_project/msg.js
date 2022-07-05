const express = require('express');
const data = require('./data');
const fs = require('fs');
const router4 = express.Router();

router4.get('/',(req,res,next)=>{
    //res.send('<form onsubmit = "fs.writeFileSync('message.txt')" action="/" id="sendmsg" method="POST"><label for="name">MessageBox : </label><input type="text" id="sendmsg" name="title"><button type="Submit">Send</button></form>')
    res.send(`<form  action="/" onsubmit = "document.getElementById('username').value=localStorage.getItem('username')" 
         method="POST">
        <label for="name">MessageBox : </label>
        <input type="text" id="msg" name="msg">
        <input type="hidden" id="username" name="username"> 
        <button type="submit">Send</button></form>`)
})

router4.post(`/`,(req,res,next)=>{
    //fs.writeFileSync(data,)
   // data.push(`${req.body.username} : ${req.body.msg}`);
    fs.writeFileSync('message1.txt',`${req.body.username} : ${req.body.msg}`);
    res.send(`<h4>${req.body.username} : ${req.body.msg}</h4>`)
    console.log(data);
    console.log(`${req.body.username} : ${req.body.msg}`);
    res.redirect(`/`);
})

module.exports = router4;