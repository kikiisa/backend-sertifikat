const { Sequelize } = require('sequelize');
const { db } = require('../config/Database');
const { DataTypes } = Sequelize;
const Users = db.define("users",{
    name:{
        type:DataTypes.STRING(75),
    },
    email:{
        type:DataTypes.STRING(75)
    },
    roles:{
        type:DataTypes.INTEGER(2)
    },
    password:{
        type:DataTypes.STRING(255)
    },
    picture:{
        type:DataTypes.STRING(75)
    }
},{
    freezeTableName:true
});

module.exports = Users