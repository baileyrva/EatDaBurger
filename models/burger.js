let Sequelize = require("sequelize"); 

let sequelize = require("../config/connection.js");

let burger = sequelize.define("burger", {
    burger_name: Sequelize.STRING, 
    devoured: Sequelize.BOOLEAN
},
{
    freezeTableName: true
});

burger.sync();

module.exports = burger;