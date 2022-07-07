const path = require('path');

const express = require('express');
const router1 = express.Router();

//const rootDir = require('../util/path');
const successController = require('../controller/contact')

router1.get('/success',successController.getsuccessmsg)
module.exports = router1;
