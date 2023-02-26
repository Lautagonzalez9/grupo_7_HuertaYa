const { body } = require('express-validator');
module.exports = {
    registerAuth: [
        body('Nombre').notEmpty().withMessage('Escribe un nombre'),
        body('Apellido').notEmpty().withMessage('Escribe un Apellido'),
        body('email').notEmpty().withMessage('Escriba un E-mail').isEmail().withMessage('No es un E-mail valido'),
        body('contrasenia').notEmpty().withMessage('Escribe una contraseña'),
        body('codigoPostal').notEmpty().withMessage('Escriba su codigo postal'),
        body('Localidad').notEmpty().withMessage('Escriba su Localidad'),
        body('numeroDeTelefono').notEmpty().withMessage('Escriba su Numero de Celular o telefono')
    
    ]
}