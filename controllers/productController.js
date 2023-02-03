const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./data/productsData.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productController = {
    
    detalleDeProducto: function(req,res){

        const id = req.params.id;
		const product = productos.find(product => product.id == id);
		
        return res.render('./products/detalle-del-producto', {product, productos});
   },
   listaDeProductos: function (req,res){

        return res.render('./products/listadoProductos',{productos});

   }
}

module.exports = productController;