const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, "./data/productsData.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
    index : function(req,res){
        res.render('index')
       
    },
    search: (req, res) => {
		const search = req.query.keywords;
		const product = [];
        
        productos.forEach(producto => {
            if(producto.name.toLowerCase().indexOf(search.toLowerCase()) >= 0){
            product.push(producto)
            }
        })
		return res.render("./products/searchResult", { productos: product })
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