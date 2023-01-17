const path = require('path');

const mainController = {
    index : function(req,res){
        res.render('index')
       
    },
    carrito: function(req,res){
        res.render('carrito')
        
    },
    register: function(req,res){
        res.render('registerForm');

    },
    login: function(req,res){
        res.render('login')
       
    },
    detalleDeProducto: function(req,res){
        res.render('detalle-del-producto')
    }
}

module.exports = mainController;