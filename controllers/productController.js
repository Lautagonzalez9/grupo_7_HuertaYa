const productController = {
    
    detalleDeProducto: function(req,res){
        res.render('./products/detalle-del-producto')
       
    },
    crearProducto: function(req,res){
        res.render('./products/crearProducto')
        
    },
    editarProducto: function(req,res){
        res.render('./products/editarProducto');

    }
}

module.exports = productController;