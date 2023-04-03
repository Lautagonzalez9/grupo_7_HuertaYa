module.exports= function(sequelize,dataTypes){
    let alias="user";
    let cols={
        iduser:{
            type:dataTypes.BIGINT(11),
            primaryKey:true,
            autoIncrement:true
            
        },
        first_name:{
            type:dataTypes.STRING(255)
        },
        last_name:{
            type:dataTypes.STRING(255)
        },
        email:{
            type:dataTypes.STRING(255)
        },
        password:{
            type:dataTypes.STRING(45)
        },
        postal_code:{
            type:dataTypes.BIGINT(11)
        },
        id_location:{
            type:dataTypes.TINYINT(4)
        },
        number_phone:{
            type:dataTypes.STRING(20)
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

    User.associate=function(models){
        User.hasMany(models.locations,{
            as:"locations",
            foreingKey:"idlocation"
        }),
        User.belonsTo(models.rols,{
            as:"rols",
            foreingKey:"idrol"
        })
        User.hasMany(models.images,{
           as:"images",
           foreingKey:"idimage"
        })
    }
    
    return User;

}