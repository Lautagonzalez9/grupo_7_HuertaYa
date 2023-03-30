module.exports = function(sequelize,dataTypes){
    let alias = "categories";
    let cols = {
        idcategory: {
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
    let categories = sequelize.define(alias,cols,config);
    return categories
};