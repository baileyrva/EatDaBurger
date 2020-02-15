var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burger.findAll({raw:true})
            .then(function (data) {
                var burgers = {
                    burger: data
                };
                res.render("index", burgers);
            });
    });

    
    app.post("/api/burgers", function (req, res) {
        console.log(req.body)
        db.burger.create({
                burger_name: req.body.burger_name,
                devoured: req.body.devoured
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        // console.log(req.body.id)
        db.burger.update(
            {
                devoured: req.body.devoured
            },
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgerdata) {
                console.log(burgerdata)
                res.json(burgerdata);
            });
    });

    app.delete("/api/burgers/:id", function (req, res) {

        db.burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

};
