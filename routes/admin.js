const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

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
router.get('/create', adminController.create)
router.post('/create', upload.single('imagen') ,adminController.creado)


router.get('/editar', adminController.edit)
router.put('/editar', adminController.editado)

// borrar un producto
router.delete('/delete/:id',adminController.removed)

module.exports = router;