const User = require("./User");

module.exports = function(sequelize,dataTypes){
    let alias = "location"
    let cols = {
        idLocation: {
            type: dataTypes.BIGINT(6).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            
        }
    }
    let config = {
        timestamps: false
    }
    let location = sequelize.define(alias,cols,config);
    
    location.associate = function(models){
        location.belongsTo(models.user,{
            as:"user",
            foreingKey:"iduser"
        }),
        location.hasMany(models.costo_de_envio,{
            as:"costo_de_envio",
            foreingKey:"idLocation",
            
        })
        
          
    }
    
    return location
}