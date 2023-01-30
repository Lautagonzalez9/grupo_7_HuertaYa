const { json } = require('express');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, './data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const adminController = {
    create: function(req,res){
        res.render('products/adminCreate')
    },
    creado: function(req,res){
        let data = fs.readFileSync('/data/productos.json', {encoding : 'utf-8'});
        const product ={
            id: products.length > 0 ? products[products.length -1].id + 1 : 1,
            name: req.body.name,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            precio: req.body.precio
        }
        let prod;
        if(data == ''){
            prod = [];
        }else{
            prod = JSON.parse(data)
        }
        prod.push(product)

        prodJson = JSON.stringify(prod);

        fs.writeFileSync('./productos.json', prodJson)

        res.redirect('/productos')
       },



    edit: function(req,res){
        res.render('products/editarProducto')
    }
}


module.exports = adminController;
