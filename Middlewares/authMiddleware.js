const { body } = require('express-validator');
module.exports = {
    registerAuth: [
        body('Nombre').notEmpty().withMessage('Escribe un nombre'),
        body('Apellido').notEmpty().withMessage('Escribe un Apellido'),
        body('email').notEmpty().withMessage('Escriba un E-mail').isEmail().withMessage('No es un E-mail valido'),
        body('password').notEmpty().withMessage('Escribe una contraseña'),
        body('codigoPostal').notEmpty().withMessage('Escriba su codigo postal'),
        body('Localidad').notEmpty().withMessage('Escriba su Localidad'),
        body('numeroDeTelefono').notEmpty().withMessage('Escriba su Numero de Celular o telefono')
    ],
    productCreate: [
        body('Name').notEmpty().withMessage('Escribe el nombre del producto'),
        body('category').notEmpty().withMessage('seleccione una categoria'),
        body('presentation').notEmpty().withMessage('Elija un tipo de presentación'),
        body('precio').notEmpty().withMessage('indica el precio').bail().isNumeric().withMessage('El precio debe ser un número'),
        body('discount').notEmpty().withMessage('Indique el descuento').bail().isInt({ min:0, max: 100}).withMessage('El descuento debe ser un número del 0 al 100'),
        // body('imagen').custom((value,{req})=>{  
        //         if(!req.file){
        //             throw new Error ('Sube una imagen')
        //         }
        //         if (!req.file.mimetype.startsWith('image/')) {
        //             throw new Error('Solo se permiten imágenes');
        //           }
        //     return true
        // }),
    ]
}