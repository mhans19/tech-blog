// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
let sequelize;

if (process.env.SECRET) {
  sequelize = new Sequelize(process.env.SECRET);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;