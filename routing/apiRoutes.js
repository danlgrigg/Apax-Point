//Load routes
var db = require("../models");

module.exports = function(app) {
  app.get("/api/emails", function(req, res) {
    db.Email.findAll({})
      .then(function(dbEmail))
      res.json(dbEmail);
  });

  //Post route to store email in DB
  app.post("/api/emails", function(req, res) {
    console.log(req.body);
    db.Email.create({
      email: req.body.email
    })
    .then(function(dbEmail){
      res.json(dbEmail)
    })
  });
};
