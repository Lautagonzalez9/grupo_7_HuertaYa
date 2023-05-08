const express = require('express');
const path = require('path');
const router = express.Router();   
const controllerIMG = require('../../controllers/api/controllerImageApi')


router.get('/:img' , controllerIMG.images)




module.exports = router;