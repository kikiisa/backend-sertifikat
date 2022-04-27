const Sertifikat = require('../models/SertifikatModels');

const getAll = async() => 
{
    const data = await Sertifikat.findAll();
    data.map((values,index)=>{
        console.log(data[index].judul)
    })

}

getAll();