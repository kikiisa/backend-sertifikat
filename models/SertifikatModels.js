const { Sequelize, Model } = require('sequelize');
const { db } = require('../config/Database');
const { DataTypes } = Sequelize;

const Sertifikat = db.define("sertifikat",{
    judul:{
        type:DataTypes.STRING(75),
    },
    nomor_sertifikat:{
        type:DataTypes.STRING(75)
    },
    tema:{
        type:DataTypes.STRING(255)
    },
    leader:{
        type:DataTypes.STRING(75)
    },
    co:{
       type:DataTypes.STRING(75) 
    },
    createdAt:{
        type:DataTypes.DATE
    }
},{
    freezeTableName:true
});
module.exports = Sertifikat;
