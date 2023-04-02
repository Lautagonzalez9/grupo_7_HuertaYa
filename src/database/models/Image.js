module.exports = function(sequelize,dataTypes){
    let alias = "images"
    let cols = {
        idimage: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING(45),
            
        }
    }
    let config = {
        timestamps: false
    }
    let Image = sequelize.define(alias,cols,config);

    Image.associate = function(models){
        Image.belongsTo(models.products,{
            as:"products",
            foreignKey: "idProducto"
        })
    }

    return Image
}