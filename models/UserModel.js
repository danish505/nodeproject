const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const UserModel = sequelize.define('UserModel',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:String,
        allowNull:false 
    },
    created_at:{
        type:'TIMESTAMP'
    }

});

module.exports = UserModel; 