module.exports = function(sequelize,dataTypes){
    let alias = "product"
    let cols = {
        idProducto: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(45),
        },
        id_presentation: {
            type: dataTypes.INT(11)
        },
        description: {
            type: dataTypes.LONGTEXT()
        },
        id_category: {
            type: dataTypes.INT(11)
        },
        price: {
            type: dataTypes.INT(11)
        },
        stock: {
            type: dataTypes.INT(11)
        },
        discount: {
            type: dataTypes.INT(11)
        },
        id_image: {
            type: dataTypes.INT(11)
        }
    }
    let config = {
        timestamps: false
    }
    const product = sequelize.define(alias,cols,config);
    return product;

    
}