const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')
const multer = require('multer');


//rutas para crear
router.get('/create', adminController.create)
router.post('/', adminController.creado)


router.get('/editar', adminController.edit)


module.exports = router;