const Sequelize = require('sequelize');


const sequelize = new Sequelize('nodeblog','root','Admin_505',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;