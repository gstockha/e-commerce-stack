const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({
  path: path.resolve('.env'),
});
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      }
});

module.exports = sequelize;
