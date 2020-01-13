//Dependencies
var path = require("path");

//Function to route user to info and home page
module.exports = function(app) {
  app.get("/info", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/info.html"));
  });
  // If no matching route is found default to index
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
