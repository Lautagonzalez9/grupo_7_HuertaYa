const fs = require('fs');

const User = {
    userDatabase: './controllers/data/usuarios.json',

    getData: function (){
        return JSON.parse(fs.readFileSync(this.userDatabase, 'utf-8'));
    },

    findById: function(id){
        let allUsers = this.getData();
        let userFound = allUsers.find(user => user.id == id);
        return userFound;
    },

    findByField: function(field,query){
        let allUsers = this.getData();
        let userFound = allUsers.find(user => user[field] === query);
        return userFound;
    }


}


module.exports = User;