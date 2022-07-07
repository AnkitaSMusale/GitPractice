const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const productsController = require('../controller/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getaddproduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postproduct);

module.exports = router;
//exports.routes = router;
//exports.products = products;