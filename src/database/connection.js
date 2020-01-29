const Sequelize = require('sequelize');

const sequelize = new Sequelize("node_shop", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    },
    timezone: 'Europe/Helsinki'
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = sequelize;
