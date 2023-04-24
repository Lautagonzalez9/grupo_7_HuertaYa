
let password = bcryptjs.hashSync('Marco', 10)
let comparacion = bcryptjs.compareSync('Marco', password);
console.log(password);