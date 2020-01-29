const Sequelize = require("sequelize");
const sequelize = require("./../database/connection");
const Tweet = sequelize.define('Tweet', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    author_id: Sequelize.INTEGER(11),
    content: Sequelize.STRING(300)
});





module.exports = Tweet;