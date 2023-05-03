const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    detailProduct: function(req,res){
        let id = req.params.id;
        db.products.findByPk(id,{
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        }).then(product => {
            let respuesta = {
                meta:{
                    status: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: product
                } 
            }
        res.json(respuesta)
        })
    },
    listProducts: function(req,res){
           
        const countByCategory = {}

            db.categories.findAll()
            .then(categories => {
            categories.forEach(category => {

                let categoria = category.name

                    db.products.findAll({
                    where: {
                        id_category: category.idcategory
                    }
                })
                .then(products => {
                    products.length
                })
                .then(numeroProds => {
                    countByCategory[categoria] = numeroProds
                })
            })
                
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
                                countByCategory: countByCategory,
                                products: productos
                            }
                        } 
                        
                    }
                    res.json(respuesta)
                
            })
    
        })
        }
}