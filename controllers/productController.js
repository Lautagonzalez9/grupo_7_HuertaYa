const fs = require("fs");
const path = require("path");
const db = require('../src/database/models');

const productsFilePath = path.join(__dirname, "./data/productsData.json");


const productController = {
    
    detalleDeProducto: async function(req,res){
        const productos = await db.products.findAll({
            include: [
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]});
        const id = req.params.id;
		const product = await db.products.findByPk(id, {
            include:[
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]});

        return res.render('./products/detalle-del-producto', {product, productos});
   },
   listaDeProductos: async function (req,res){
        const productos = await db.products.findAll({
            include: [
                {association: "images"}
            ]
        })

        return res.render('./products/listadoProductos',{productos});
              
   },
   listadoPorCategoria: async function (req,res){
        const categoryId = req.params.categoria
        const productos = await db.products.findAll({
            where: {
                id_category: categoryId
            },
            include: [
                {association: "images"},
                {association: "categories"},
                {association: "presentations"}
            ]
        })
        return res.render('./products/listadoProductos',{productos})
   }
}

module.exports = productController;