const Sertifikat = require('../models/SertifikatModels');
const Dashboard = async (req,res) => 
{
    const count = await Sertifikat.count();
    res.render('dashboard',{
        title:'Dashboard',
        sertifikat:count
    });
}

module.exports = { Dashboard }