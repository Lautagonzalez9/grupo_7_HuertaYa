const path = require('path');


const adminController = {
    create: function(req,res){
        res.render('products/adminCreate')
    }
}

module.exports = adminController;
