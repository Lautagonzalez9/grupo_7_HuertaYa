
const fs = require('fs');
const path = require('path');
const db = require('../src/database/models')
const productsFilePath = path.join(__dirname, './data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require('express-validator')

function guardarImagen(req,res){
    return  db.images.create({
          url: req.file.filename
      })
  }

const adminController = {
    create: async function(req,res){
        let categories = await db.categories.findAll();
        let presentations = await db.presentations.findAll();
        res.render('products/adminCreate',{categories,presentations})
    },
    creado: async function(req,res){
        try {
        var idImage = 1
        if(req.file){
            guardarImagen(req)
            .then((imagen)=>{
                var idImage = imagen.idimage;
            })
        } 
        db.products.create({
            name: req.body.Name,
            description: req.body.descripcion,
            id_category: req.body.category,
            id_presentation: req.body.presentation,
            price: Number(req.body.precio),
            id_image: idImage
        })
        .then(res.redirect('/'))
    } catch(error) {
            console.log(error)
        }
       },
    
       dataProducts: function(){
           return JSON.parse(fs.readFileSync(this.fileProducts,'utf-8'));
       },
          
       findAllProducts: function (){
           return this.dataProducts();
       },
   
       findProductsId: function(id){
           let allProducts = this.findAllProducts();
           let idFound = allProducts.find(oneProduct => oneProduct.id === id);
           return idFound
       },
       
       edit: function(req,res){
        const id = req.params.id;
		const productos = products.find(product => product.id == id);
		
        res.render('products/editarProducto', {productos})
        },
   
       edited: function(req,res){
           return res.render("Producto editado");
       },
   
       delete: function(req,res){
            let id = req.params.id
            let product = products;

            product = product.filter(oneProduct => oneProduct.id != id);
            
           fs.writeFileSync(path.join(__dirname, './data/productsData.json'), JSON.stringify(product, null, 2));
           
           return res.redirect("/productos");
       }
}


module.exports = adminController;
