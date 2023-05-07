const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { images } = require('../mainController');

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
            let imagenUrl = 'http://localhost:3500/' + product.images.url;
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
        db.products.findAll({
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(products => {
            let respuesta = {
                meta:{
                    status: {
                        status: 200,
                        url: '/api/products'
                    },
                    //data: {
                    //    count: products.length,
                    //    countByCategory:
                        //    db.category.
                        //     products.categories.map(category => {
                        //         console.log(category)
                        // }
                        // Revisar en la base de datos bien como llamar la categoria
                    //}
                } 
            }
            res.json(respuesta)
            })
    }
}