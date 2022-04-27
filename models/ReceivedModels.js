const { Sequelize, Model } = require('sequelize');
const { db } = require('../config/Database');
const { DataTypes } = Sequelize;

const Received = db.define("received",{
    name:{
        type:DataTypes.STRING(75),
    },
    nik:{
        type:DataTypes.STRING(50)
    },
    email:{
        type:DataTypes.STRING(75)
    },
    telepon:{
        type:DataTypes.STRING(14)
    },
    id_sertifikat:{
        type:DataTypes.STRING(75)
    },
    nomor_sertifikat:{
        type:DataTypes.STRING(75)
    }
},{
    freezeTableName:true
});
module.exports = Received;