module.exports = function(sequelize,dataTypes){
    let alias = "presentation"
    let cols = {
        idpresentation: {
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
    let presentation = sequelize.define(alias,cols,config);
    return presentation
}