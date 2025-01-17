// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

// create connection to our db
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
  });
}

module.exports = sequelize;