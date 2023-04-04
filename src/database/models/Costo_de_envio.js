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
    const costo_de_envio = sequelize.define(alias,cols,config);
    
    costo_de_envio.associate = function (models){
        costo_de_envio.belongsTo(models.location,{
          as:"location",
          foreingKey:"idlocation"
        }),
        costo_de_envio.hasMany(models.facturation,{
            as:"facturation",
            foreingKey:"idcostoEnvios"
        })

    }
    return costo_de_envio;
}