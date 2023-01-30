
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, './data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const adminController = {
    create: function(req,res){
        res.render('products/adminCreate')
    },
    creado: function(req,res){
        
        let data = fs.readFileSync(path.join(__dirname, './data/productos.json'), {encoding : 'utf-8'});
        const product ={
            id: products.length > 0 ? products[products.length -1].id + 1 : 1,
            name: req.body.Name,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            presentacion: req.body.unidad,
            precio: req.body.precio
        };
        let prod;
        if(data == ''){
            prod = [];
        }else{
            prod = JSON.parse(data)
        };
        prod.push(product);

        prodJson = JSON.stringify(prod, null, 2);

        fs.writeFileSync(path.join(__dirname, './data/productos.json'), prodJson);

        res.redirect('/');
       },



    edit: function(req,res){
        res.render('products/editarProducto')
    }
}


module.exports = adminController;
