// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Parent" model that matches up with DB
var Parent = sequelize.define("parent", {
  // the parents name gets saved as a string
  parent_name: Sequelize.STRING,
  // the email of the parent (a string)
  email: Sequelize.STRING,
}, {
  timestamps: false
});

// Syncs with DB
Parent.sync();

// Makes the Parent Model available for other files (will also create a table)
module.exports = Parent;

