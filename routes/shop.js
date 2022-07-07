const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const productsController = require('../controller/product');

const adminData = require('./admin');

const router = express.Router();

router.get('/', productsController.getproduct);

module.exports = router;