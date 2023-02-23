// Controladores utilizados para el manejo de rutas del login , register .
const path=require('path');
const User = require('../models/User')

const usuariosController={
    register:function(req,res){
        res.render('registerForm')
    },
    login:function(req,res){
        res.render('login')
    },
    validateLogin:function(req,res){
        let userToLogin = User.findByField("Email", req.body.email);
        
        if(userToLogin){

        }

        return res.render('login',{
            errors: {
                email: {
                    msg: 'El mail no se encuentra registrado'
                }
            }
        });

        let usuarioIngresado = req.body.email;
        let passwordIngresada = req.body.password;

        //guardado de cookies de usuario
        if(req.body.recordarme == "on"){
            res.cookie("recordarUsuario", req.body, {maxAge: 3600000})
            }
        res.redirect('/')
    }
}

module.exports = usuariosController;