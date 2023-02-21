const express = require('express');
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')
const usuariosController = require('../controllers/usuariosController')


router.get('/', mainController.index);
router.get('/search', mainController.search);
router.get('/carrito', mainController.carrito);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.post('/login', usuariosController.validateLogin);
//router.get('/producto/crear', productController.crearProducto);
//router.get('/producto/editar', productController.editarProducto);
router.get('/producto/:id', productController.detalleDeProducto);
router.get('/productos', productController.listaDeProductos);


module.exports = router;