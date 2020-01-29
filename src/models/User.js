const Sequelize = require("sequelize");
const sequelize = require("../database/connection");


const User = sequelize.define("User",{
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type: Sequelize.STRING(255)
    },
    username: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: false
    },
    last_logined: {
        type: Sequelize.DATE
    }
});


module.exports = User;