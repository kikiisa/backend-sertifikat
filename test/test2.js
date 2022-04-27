const Sertifikat = require('../models/SertifikatModels');
const Received = require('../models/ReceivedModels');
const { db } = require('../config/Database');
const sequelize = require('sequelize');

const get_join = async  (nik,id) => 
{
   const [results,metadata] = await db.query(`SELECT * FROM sertifikat INNER JOIN received ON sertifikat.nomor_sertifikat = received.id_sertifikat WHERE received.nik ='${nik}' AND sertifikat.id = '${id}'`)
   console.log(results.length);
}