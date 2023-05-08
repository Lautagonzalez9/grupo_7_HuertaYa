const db = require('../../src/database/models');
const sequelize = db.sequelize;

const path = require('path')

module.exports = {
    
    images: function(req,res){
    let img = req.params.img
    const imagePath = path.join(__dirname, '../../public/img/', img);
    res.sendFile(imagePath);
}
}