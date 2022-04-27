const { Sequelize, Model } = require('sequelize');
const { db } = require('../config/Database');
const { DataTypes } = Sequelize;

const Company = db.define("company",{
    nama_perusahaan:{
        type:DataTypes.STRING(75),
    },
    leaders:{
        type:DataTypes.STRING(75)
    },
    co_leaders:{
        type:DataTypes.STRING(75)
    },
    createdAt:{
        type:DataTypes.DATE
    }
},{
    freezeTableName:true
});
db.sync({force:true});
module.exports = Company;