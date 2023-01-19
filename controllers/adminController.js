const path = require('path');


const adminController = {
    create: function(req,res){
        res.render('adminCreate')
    }
}

module.exports = adminController;