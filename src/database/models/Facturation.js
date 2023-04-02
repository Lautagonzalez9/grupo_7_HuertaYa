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

    facturation.associate = function(models) {
        facturation.belongsTo(models.user, {
            as: "user",
            foreignkey: "id_user"
        })
        
        facturation.belongsTo(models.metodos_de_pago, {
            as: "metodos_de_pago",
            foreignkey: "id_metodoPago"
        })

        facturation.belongsTo(models.costo_de_envio, {
            as: "costo_de_envio",
            foreignkey: "id_costosEnvios"
        })
    }

    

    return facturation;
};