module.exports = function(sequelize,dataTypes){
    let alias = "image"
    let cols = {
        idimage: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING(45),
            
        }
    }
    let config = {
        timestamps: false
    }
    let image = sequelize.define(alias,cols,config);
    return image
}