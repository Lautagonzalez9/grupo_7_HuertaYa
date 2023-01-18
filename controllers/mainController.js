const path = require('path');

const mainController = {
    index : function(req,res){
        res.render('index')
       
    },
    carrito: function(req,res){
        res.render('./products/carrito')
        
    },
<<<<<<< HEAD
   register: function(req,res){
        res.render('registerForm');

    },
   login: function(req,res){
       res.render('login')
       
    },
    detalleDeProducto: function(req,res){
     res.render('detalle-del-producto')
=======
    register: function(req,res){
        res.render('./users/registerForm');

    },
    login: function(req,res){
        res.render('./users/login')
       
    },
    detalleDeProducto: function(req,res){
        res.render('./products/detalle-del-producto')
>>>>>>> 600634f914d5a391352fc53604b9c664be5bb082
    }
}

module.exports = mainController;