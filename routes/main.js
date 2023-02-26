const express = require('express');
const path = require('path');
const router = express.Router();   
const multer = require('multer'); 
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
const usuariosController = require('../controllers/usuariosController');
const authMid = require('../Middlewares/authMiddleware')
// const { body } = require('express-validator');

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

//inicio
router.get('/', mainController.index);
//search
router.get('/search', mainController.search);
//carro
router.get('/carrito', mainController.carrito);

//registro
router.get('/register', mainController.register);
router.post('/register', authMid.registerAuth, upload.single('imgPerfil'), usuariosController.registrado)


//login
router.get('/login', mainController.login);
router.post('/login', usuariosController.validateLogin);

//productos
router.get('/producto/:id', productController.detalleDeProducto);
router.get('/productos', productController.listaDeProductos);


module.exports = router;