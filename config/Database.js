const { Sequelize } = require('sequelize');


const db = new Sequelize('e_sertifikat','root','',{
    host:'localhost',
    dialect:'mysql'
});


module.exports = { db }