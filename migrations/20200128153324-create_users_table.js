'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
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
            },
            updated_at: Sequelize.DATE,
            created_at: Sequelize.DATE
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
