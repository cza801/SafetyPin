// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Parents = require("../models/parents.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:parents?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Parents.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var parent = req.body;

    // Create a routeName
    var routeName = parent.name.replace(/\s+/g, "").toLowerCase();

    // Then add the parent to the database using sequelize
    parent.create({
      routeName: routeName,
      name: parent.parent_name,
      email: parent.email,
    });

  });
};
