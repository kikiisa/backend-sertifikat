const Sertifikat = require('../models/SertifikatModels');

const up = async () =>
{
    const name = await Sertifikat.create({
        judul : 'Webinar Interaksi Social',
        nomor_sertifikat : '101-303',
        tema : 'Memberikan Suasana Baru',
        leader : 'Mohamad Rizky Isa',
        co : 'Kasmawaty Wartabone',
        createdAt : new Date()
    });
} 

