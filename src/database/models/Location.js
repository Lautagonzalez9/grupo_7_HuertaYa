module.exports = function(sequelize,dataTypes){
    let alias = "location"
    let cols = {
        idLocation: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            
        }
    }
    let config = {
        timestamps: false
    }
    let location = sequelize.define(alias,cols,config);
    return location
}