// Controladores utilizados para el manejo de rutas del login , register .
const path=require('path');

const usuariosController={
    register:function(req,res){
        res.render('registerForm')
    },
    login:function(req,res){
        res.render('login')
    }
}