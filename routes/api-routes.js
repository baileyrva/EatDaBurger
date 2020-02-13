var db = require("../config/connection");

var burger = require("../models/burger");


module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    burger.findAll({ raw: true }).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });


















  //route to insert a new burger...this route is working
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.burger
      .create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      })
      .then(function(burgerdata) {
        res.json(burgerdata);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    // console.log(req.body.id)
    db.burger
      .update(
        {
          devoured: req.body.devoured
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(burgerdata) {
        console.log(burgerdata);
        res.json(burgerdata);
      });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.burger
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(burgerdata) {
        res.json(burgerdata);
      });
  });
};
