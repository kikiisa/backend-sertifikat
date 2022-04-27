const { db } = require('../config/Database');
const api_search = async (req,res) => 
{
    try {
        const { nik,id } = req.params
        const [results,metadata] = await db.query(`SELECT * FROM sertifikat INNER JOIN received ON sertifikat.nomor_sertifikat = received.id_sertifikat WHERE received.nik ='${nik}' AND sertifikat.id = '${id}'`)
        if(results.length > 0)
        {
            return res.json({
                msg:true,
                data:results
            }).status(200)
        }else{
            return res.json({
                msg:false,
                pesan:'Maaf data tidak di temukan',
            }).status(200)
        }
    }catch (error) {
        return res.json({
            msg:false,
            pesan:error
        });
    }
    
}
module.exports = { api_search }