const path = require('path');


const adminController = {
    create: function(req,res){
        res.render('products/adminCreate')
    },
    edit: function(req,res){
        res.render('products/editarProducto')
    }
}

module.exports = adminController;
