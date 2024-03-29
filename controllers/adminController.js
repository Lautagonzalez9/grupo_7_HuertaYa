
const fs = require('fs');
const path = require('path');
const db = require('../src/database/models')

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
        if(validationResult(req).isEmpty()){    
            try {
            if(req.file){
                guardarImagen(req)
                .then((imagen)=>{
                    let idImage = imagen.idimage;
                    db.products.create({
                        name: req.body.Name,
                        description: req.body.descripcion,
                        id_category: req.body.category,
                        id_presentation: req.body.presentation,
                        price: Number(req.body.precio),
                        id_image: idImage,
                        discount: Number(req.body.discount)
                    })
                })
            } else {
                db.products.create({
                    name: req.body.Name,
                    description: req.body.descripcion,
                    id_category: req.body.category,
                    id_presentation: req.body.presentation,
                    price: Number(req.body.precio),
                    id_image: 1,
                    discount: Number(req.body.discount)
                })
            }
            return res.redirect('/')
        } catch(error) {
                console.log(error)
            }
        } else {
            res.send('se ha producido un error')
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
       
       edit: async function(req,res){
        const id = req.params.id;
        let categories = await db.categories.findAll();
        let presentations = await db.presentations.findAll();

		const productos = await db.products.findByPk(id,{
            include:[
                {association: "categories"},
                {association: "presentations"},
                {association: "images"}
            ]
        });
        res.render('products/editarProducto', {productos,categories,presentations})
        },
   
       edited: async function(req,res){
        const id = req.params.id;
        if(validationResult(req).isEmpty()){ 
        try {
            
            if(req.file){
                guardarImagen(req)
                .then((imagen)=>{
                    let idImage = imagen.idimage;
                    db.products.update({
                        name: req.body.Name,
                        description: req.body.description,
                        id_category: req.body.category,
                        id_presentation: req.body.presentation,
                        price: Number(req.body.precio),
                        id_image: idImage,
                        discount: Number(req.body.discount)
                    },
                    {
                        where: {idProducto: id}
                    })
                    .then(res.redirect('/productos'))
                })
            } else {
                 db.products.update({
                    name: req.body.name,
                    description: req.body.description,
                    id_category: req.body.category,
                    id_presentation: req.body.presentation,
                    price: Number(req.body.precio),
                    discount: Number(req.body.discount)
                },
                {
                    where: {idProducto: id}
                })
                .then(res.redirect('/productos'))
            }
        } catch(error) {
                console.log(error)
            }
        } else {
            console.log(validationResult(req))
            res.send('se ha producido un error')
        }
           },
   
       delete: function(req,res){
            let id = req.params.id
            
            db.products.destroy({
                where: {idProducto: id}
            })

            return res.redirect("/productos");
       }
}


module.exports = adminController;
