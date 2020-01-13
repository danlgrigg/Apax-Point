//Set dependencies
var express = require("express");

var app = express();

// Requiring our models for syncing
var db = require("./models");

// Set the port of our application
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router directs
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

const syncOptions = {
  force: false
};
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
