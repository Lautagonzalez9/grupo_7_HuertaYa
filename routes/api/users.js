const express = require('express');
const path = require('path');
const router = express.Router(); 
const controllerUserApi = require('../../controllers/api/controllerUserApi');

//Listado de usuarios
router.get('/', controllerUserApi.list);

//Detalle de usuarios
router.get('/:id', controllerUserApi.detail)

module.exports = router;