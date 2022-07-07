const path = require('path');

const express = require('express');
const router = express.Router();

//const rootDir = require('../util/path');
const contactController = require('../controller/contact')

router.get('/ContactUs', contactController.getContact)

router.post('/ContactUs', contactController.postContact)

module.exports = router;