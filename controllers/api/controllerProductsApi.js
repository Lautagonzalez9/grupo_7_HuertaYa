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
        //const countByCategory = {}

        //Creo que para que funcione tengo que hacer que sea asincronica la funcion de crear las categorias
            // db.categories.findAll()
            // .then(categories => {
            // categories.forEach(category => {

            //     let categoria = category.name

            //         db.products.findAll({
            //         where: {
            //             id_category: category.idcategory
            //         }
            //     })
            //     .then(products => {
            //         products.length
            //     })
            //     .then(numeroProds => {
            //         countByCategory[categoria] = numeroProds
            //     })
            //     })})
        //aca termina la funcion de crear las categorias        

        //solución  --- guardar en variables cada paso, guardar objeto con categorias, guardar categorias, guardar productos. Dsps iterar y usar un filter con el name.
        const countByCategory = {}

        //let categorias = db.categorias.findAll()

        let propiedadesCategorias = db.categories.findAll()
        .then(categories => {
        categories.forEach(category => {

            countByCategory[category.name] = 0

            })})

        let Productos =  db.products.findAll({
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        })

        async function prodsPorCategoria(){

            await Productos
            await propiedadesCategorias

            countByCategory.forEach(category => {
                
                countByCategory[category] = productos.filter(producto => producto.categories.name == category).length

        })
        }    
        

// fin solución


                
                db.products.findAll({
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
        
                    let respuesta = {
                        meta:{
                            status: {
                                status: 200,
                                url: '/api/products'
                            },
                            data: {
                                count: products.length,
                                countByCategory: prodsPorCategoria(),
                                products: productos
                            }
                        } 
                        
                    }
                    res.json(respuesta)
                }
                )
        }
     }
