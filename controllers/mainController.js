const path = require('path');

const mainController = {
    index : function(req,res){
        res.render('index')
       
    },
    carrito: function(req,res){
        res.render('./products/carrito')
        
    },
    register: function(req,res){
        res.render('./users/registerForm');

    },
    login: function(req,res){
        res.render('./users/login')
       
    },
    detalleDeProducto: function(req,res){
        res.render('./products/detalle-del-producto')
    }
}

module.exports = mainController;