const express = require('express');
const path = require('path');
const router = express.Router();   
const multer = require('multer'); 
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
const usuariosController = require('../controllers/usuariosController');
const authMid = require('../Middlewares/authMiddleware')
const { body } = require('express-validator');
const guestRedirectMiddleware = require('../Middlewares/guestRedirectMiddleware')
const userRedirectMiddleware = require('../Middlewares/userRedirectMiddleware')

// set multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })



//prueba
router.get('/prueba', mainController.pruebamysql)


//inicio
router.get('/', mainController.index);
//search
router.get('/search', mainController.search);
//carro
router.get('/carrito', mainController.carrito);

//registro
router.get('/register', userRedirectMiddleware, mainController.register);
router.post('/register', upload.single('imgPerfil'), authMid.registerAuth,usuariosController.registrado)

// detalle de usuarios
router.get('/list',usuariosController.list) 

//Edición de usuarios
router.get('/list/:id', usuariosController.edit) 
router.post('/detail/:id',upload.single('imgPerfil'), usuariosController.update)

//login
router.get('/login', userRedirectMiddleware, mainController.login);
router.post('/login',  usuariosController.validateLogin);

//profile
router.get('/profile', guestRedirectMiddleware, usuariosController.profile)

//productos
router.get('/producto/:id', productController.detalleDeProducto);
router.get('/productos', productController.listaDeProductos);

//categorias
router.get('/productos/:categoria', productController.listadoPorCategoria);

//Log out
router.get('/logout', guestRedirectMiddleware, usuariosController.logout);


module.exports = router;