module.exports = function(sequelize,dataTypes){
    let alias = "facturation";
    let cols = {
        idFacturation: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_cart: {
            type: dataTypes.BIGINT(11)
        },
        id_user: {
            type: dataTypes.BIGINT(11)
        },
        id_metodoPago: {
            type: dataTypes.BIGINT(11)
        },
        id_costoEnvio: {
            type: dataTypes.BIGINT(11)
        },
        adress: {
            type: dataTypes.STRING(45)            
        }, 
        total: {
            type: dataTypes.BIGINT(11)
        }
    };
    let config = {
        timestamps: false
    };
    let facturation = sequelize.define(alias,cols,config);
    return facturation;
};