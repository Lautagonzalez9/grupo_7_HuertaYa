module.exports = function(sequelize,dataTypes){
    let alias = "presentations"
    let cols = {
        idpresentation: {
            type: dataTypes.BIGINT(11).UNSIGNED,
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
    let Presentation = sequelize.define(alias,cols,config);

    Presentation.associate = function(models){
        Presentation.hasMany(models.products,{
            as:"products",
            foreignKey: "idProducto"
        })
    }

    return Presentation
}