module.exports = function(sequelize,dataTypes){
    let alias = "categories";
    let cols = {
        idcategory: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            
        }
    };
    let config = {
        timestamps: false
    };
    const Category = sequelize.define(alias,cols,config);

    Category.associate = function(models){
        Category.hasMany(models.products,{
            as:"products",
            foreignKey: "idProducto"
        })
    }

    return Category
};