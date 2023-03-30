module.exports = function(sequelize,dataTypes){
    let alias = "product"
    let cols = {
        idProducto: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
        },
        id_presentation: {
            type: dataTypes.BIGINT(11)
        },
        description: {
            type: dataTypes.TEXT()
        },
        id_category: {
            type: dataTypes.BIGINT(11)
        },
        price: {
            type: dataTypes.BIGINT(11)
        },
        stock: {
            type: dataTypes.BIGINT(11)
        },
        discount: {
            type: dataTypes.BIGINT(11)
        },
        id_image: {
            type: dataTypes.BIGINT(11)
        }
    }
    let config = {
        timestamps: false
    }
    const product = sequelize.define(alias,cols,config);
    return product;

    
}