const path = require('path');
const fs = require('fs');
const db = require('../src/database/models');
const fetch = require('node-fetch');
const { response } = require('express');

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
        fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre&max=30')
            .then(response => response.json())
                .then(mun => {
                   let municipios = mun.municipios 
                    res.render('./users/registerForm',{municipios});
                })
    },
    login: function(req,res){
        res.render('./users/login')
       
    },
    detalleDeProducto: function(req,res){
        res.render('./products/detalle-del-producto')
    },
    pruebamysql: function(req,res){
       db.costo_de_envio.findAll()
        .then(prueba =>{
            res.send(prueba)
        })
    }
}

module.exports = mainController;