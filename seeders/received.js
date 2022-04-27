const bcrypt = require('bcrypt');
const Received = require('../models/ReceivedModels');

const up = async () =>
{
    const name = await Received.create({
        name:'Sofyan Isa',
        nik:'T3119051',
        email:'Sofyanisa@gmail.com',
        telepon:'083131152585',
        id_sertifikat: '101-303',
        nomor_sertifikat: '101-303-290',
        createdAt:new Date(),
        updatedAt:new Date()
    })
} 

up();