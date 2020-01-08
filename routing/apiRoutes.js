//Load routes
var emailsData = require("../data/emails");

module.exports = function(app) {
  app.get("/api/emails", function(req, res) {
    res.json(email);
  });

  //Post route to store email in DB
  app.post("/api/emails", function(req, res) {
    var newEmail = req.body;
    console.log(newEmail);
  });
};
