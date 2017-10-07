// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("buyairb1_safetypin", "buyairb1_josh", "safetypin", {
  host: "173.254.28.142",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
