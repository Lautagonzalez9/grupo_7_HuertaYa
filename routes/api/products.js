const express = require('express');
const path = require('path');
const router = express.Router(); 
const controllerProduct = require("../../controllers/api/controllerProductsApi")







//producto por id
router.get('/:id', controllerProduct.detailProduct)



module.exports = router