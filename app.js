const express = require('express');
const app = express();
const port = 3500;
const path = require('path');
const publicPath = path.join(__dirname, '/public');
//uso estatico
app.use(express.static(publicPath));
//levantar servidor
app.listen (3500, ()=>{console.log('Servidor con puerto 3500 corriendo')});
//Rutas y links
app.get('localhost:3500/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))});
app.get('/carrito',(req,res)=>{res.sendFile(path.join(__dirname,'./views/carrito.html'))})
app.get("/detalle-de-producto",(req,res)=>{res.sendFile(path.join(__dirname,"./views/detalle-del-producto.html"))});