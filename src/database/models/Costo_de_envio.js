module.exports = function(sequelize,dataTypes){
    let alias = "costo_de_envio"
    let cols = {
        idCostoEnvios: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_location: {
            type: dataTypes.BIGINT(11),
        },
        price: {
            type: dataTypes.BIGINT(11)
        }
    }
    let config = {
        timestamps: false
    }
    const envio = sequelize.define(alias,cols,config);
    return envio;
}