const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-huertaya.alwaysdata.net',
  user: 'huertaya',
  password: 'HY-2023',
  database: 'huertaya_db'
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error);
  } else {
    console.log('Conexión exitosa a la base de datos.');
  }
});