module.exports = function(sequelize,dataTypes){
    let alias = "metodos_de_pago";
    let cols = {
        idMetodoPago: {
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
    let metodos_de_pago = sequelize.define(alias,cols,config);

    metodos_de_pago.associate = function(models){
        metodos_de_pago.belongsTo(models.facturation,{
           as:"facturarion",
           foreingKey:"idmetodoPago"
        })
    }


    return metodos_de_pago;
};