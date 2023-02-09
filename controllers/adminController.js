
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, './data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const adminController = {
    create: function(req,res){
        res.render('products/adminCreate')
    },
    creado: function(req,res){
        
        let data = fs.readFileSync(path.join(__dirname, './data/productsData.json'), {encoding : 'utf-8'});
        const product ={
            id: products.length > 0 ? products[products.length -1].id + 1 : 1,
            name: req.body.Name,
            description: req.body.descripcion,
            category: req.body.categoria,
            presentation: req.body.unidad,
            price: Number(req.body.precio),
            image: req.file?.filename ? req.file.filename : "default-image.png"
        };
        let prod;
        if(data == ''){
            prod = [];
        }else{
            prod = JSON.parse(data)
        };
        prod.push(product);

        prodJson = JSON.stringify(prod, null, 2);

        fs.writeFileSync(path.join(__dirname, './data/productsData.json'), prodJson);

        res.redirect('/');
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
