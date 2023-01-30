const express = require('express');
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')


router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
//router.get('/producto/crear', productController.crearProducto);
//router.get('/producto/editar', productController.editarProducto);
router.get('/producto/:id', productController.detalleDeProducto);


module.exports = router;