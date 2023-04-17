const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const authMid = require('../Middlewares/authMiddleware')
const guestRedirectMiddleware = require('../Middlewares/guestRedirectMiddleware')

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


//rutas para crear
router.get('/create', guestRedirectMiddleware, adminController.create)
router.post('/create', upload.single('imagen'), authMid.productCreate ,adminController.creado)


router.get('/edit/:id', guestRedirectMiddleware, adminController.edit);
router.put('/edit/:id', upload.single('imagen'), authMid.productCreate, adminController.edited);

// borrar un producto
router.delete('/delete/:id', guestRedirectMiddleware, adminController.delete); //No estoy seguro de que este middleware vaya aca

module.exports = router;