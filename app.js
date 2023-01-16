const express = require('express');
const app = express();
const port = 3500;
const path = require('path');
const publicPath = path.join(__dirname, '/public');
//configuro view engine
app.set("viewengine","ejs");
//uso estatico
app.use(express.static(publicPath));
//levantar servidor
app.listen (3500, ()=>{console.log('Servidor con puerto 3500 corriendo')});
//Rutas y links
app.get('localhost:3500/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/index.html'))});
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/index.html'))});
app.get('/carrito',(req,res)=>{res.sendFile(path.join(__dirname,'./views/carrito.html'))})
app.get("/detalle-de-producto",(req,res)=>{
    res.render(path.join(__dirname,"./views/detalle-del-producto.ejs"));
});
app.get('/register',(req,res)=>{res.sendFile(path.join(__dirname,'./views/registerForm.html'))})
app.get('/login',(req,res)=>{res.sendFile(path.join(__dirname,'./views/login.html'))})