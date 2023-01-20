const express = require('express');
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/create', adminController.create)
router.get('/editar', adminController.edit)


module.exports = router;