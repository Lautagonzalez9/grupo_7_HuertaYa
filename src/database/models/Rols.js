module.exports = function(sequelize,dataTypes){
    let alias = "rol"
    let cols = {
        idrol: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(10),
            
        }
    }
    let config = {
        timestamps: false
    }
    const rol = sequelize.define(alias,cols,config);
    return rol;
}