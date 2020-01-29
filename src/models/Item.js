const Sequelize = require("sequelize");
const sequelize = require("./../database/connection");


module.exports = sequelize.define("Item", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:  Sequelize.STRING(300)
});