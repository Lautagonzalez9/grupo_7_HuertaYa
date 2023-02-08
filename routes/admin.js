const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')
const multer = require('multer');
const path = require('path')

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


router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', adminController.edited);


module.exports = router;