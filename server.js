let express = require("express");


let app = express();
let PORT = process.env.PORT || 3000;

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-routes")(app);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
