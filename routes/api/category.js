const express = require('express');
const path = require('path');
const router = express.Router(); 
const categoryController = require('../../controllers/api/controllerCategory')


router.get('/',categoryController.category )

module.exports = router