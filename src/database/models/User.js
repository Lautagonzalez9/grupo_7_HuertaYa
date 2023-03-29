module.exports= function(sequelize,dataTypes){
    let alias="user";
    let cols={
        iduser:{
            type:dataTypes.INT(11),
            prymaryKey:true,
        },
        first_name:{
            type:dataTypes.VARCHAR(45)
        },
        last_name:{
            type:dataTypes.VARCHAR(45)
        },
        email:{
            type:dataTypes.VARCHAR(45)
        },
        password:{
            type:dataTypes.VARCHAR(45)
        },
        postal_code:{
            type:dataTypes.INT(11)
        },
        id_location:{
            type:dataTypes.TINYINT(4)
        },
        number_phone:{
            type:dataTypes.VARCHAR(20)
        },
        id_image:{
            type:dataTypes.TINYINT(4)
        },
        id_rol:{
            type:dataTypes.TINYINT(4)
        }

    };
    let config={
        timestamps:false
    }
    const User=sequelize.define(alias,cols,config);
    return User;
}