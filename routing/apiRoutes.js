//Load routes
var emailsData = require("../data/emails");

module.exports = function(app) {
    //Post route to store email in DB
  app.post("/api/emails", function(req, res) {
    var newEmail = req.body;
    console.log(newEmail);
    
    emailsData.push(newFriend);
    res.json(bestFriend);
  });
};
