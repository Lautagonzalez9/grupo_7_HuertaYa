const express = require('express');
const path = require('path');
const router = express.Router(); 
const controllerUserApi = require('../../controllers/api/controllerUserApi');

//Listado de usuarios
router.get('/', controllerUserApi.list);

module.exports = router;