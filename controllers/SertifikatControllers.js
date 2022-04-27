const Sertifikat = require('../models/SertifikatModels');
const { create_key } = require('../helpers/key');
const { alert } = require('../helpers/message');

const new_sertifikat = (req,res) => 
{
    res.render('add_sertifikat',{
        title:'New Sertifikat'
    });
}

const api_list = async(req,res) => 
{
    const data = await Sertifikat.findAll();
    res.json({
        msg:'success',
        data:data
    }).status(200);
}

const list_sertifikat = async (req,res) => 
{
    const data = await Sertifikat.findAll();
    res.render('list_sertifikat',{
        title:'List Sertifikat',
        data:data
    });

}
const sertifikat = async (req,res) =>
{
    const { title,theme,leader,co } = req.body;
    const insert = await Sertifikat.create({
        judul:title,
        nomor_sertifikat:create_key(),
        tema:theme,
        leader:leader,
        co:co,
        createdAt:new Date()
    })
    alert(req,'Success add New Sertifikat');
    res.redirect('/new-sertifikat')
}



module.exports = { new_sertifikat,sertifikat,list_sertifikat,api_list }