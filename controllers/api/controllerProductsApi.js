const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { images } = require('../mainController');
const { response } = require('express');

module.exports = {
    detailProduct: function(req,res){
        let id = req.params.id;
        db.products.findByPk(id,{
            include:[
                {association: "images", attributes:['idimage','url'],
                map: (images) => ({...images.toJSON(), url: 'http://localhost:3500/' + images.url})},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(product => {
            let imagenUrl = 'http://localhost:3500/images/' + product.images.url;
            let respuesta = {
                meta:{
                    status: {
                        status: 200,
                        url: 'http://localhost:3500/api/products/' + id
                    },
                    data: {
                        idProducto: product.idProducto,
                        name: product.name,
                        id_presentation: product.id_presentation,
                        description: product.description,
                        id_category: product.id_category,
                        price: product.price,
                        stock: product.stock,
                        discount: product.discount,
                        images: {
                            idimage: product.images.idimage,
                            url: imagenUrl
                        },
                        categories: {
                            idcategory: product.categories.idcategory,
                            name: product.categories.name
                        },
                        presentations: {
                            idpresentation: product.presentations.idpresentation,
                            name: product.presentations.name
                        }
                    },
                    
                } 
            };
        res.json(respuesta)
        })
    },
    listProducts: function(req,res){

        let Categorias = db.categories.findAll().then(data=>{return data})


        let Productos =  db.products.findAll({
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(data => {return data})

        async function prodsPorCategoria(){
            const countByCategory = {}

            let prods = await Productos
            let cats = await Categorias
            
            cats.forEach(category => {
                //console.log(prods)
                countByCategory[category.name] = prods.filter(producto => producto.categories.name == category.name).length

        })
            return countByCategory
        }   

         
            let productosArray = db.products.findAll({
                    include:[
                        {association: "images"},
                        {association: "categories"},
                        {association: "presentations"}
                    ]
                }).then(products => {
                    
                    let productos = []
                    
                    products.forEach(product => {
                        productos.push({
                            id: product.idProducto,
                            name: product.name,
                            description: product.description,
                            detail: "/producto/" + product.idProducto
        
                    })
                    })
                    return productos;
                }
                )

                Promise.all([productosArray, prodsPorCategoria(), Categorias])
                .then(response => {

                let respuesta = {
                    meta:{
                        status: {
                            status: 200,
                            url: '/api/products'
                        },
                        data: {
                            count: response[0].length,
                            countByCategory: response[1],
                            products: response[0],
                            categories: response[2].length
                        }
                    } 
                    
                }
                res.json(respuesta)
            }) 
        },
      
     }
