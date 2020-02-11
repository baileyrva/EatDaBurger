module.exports = function(sequelize, DataTypes) {
    let burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return burger; 
}