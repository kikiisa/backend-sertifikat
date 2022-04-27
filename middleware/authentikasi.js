const { alert,errors } = require('../helpers/message');
function is_login(req,res,next)
{
    const { status } = req.session;
    if(status != 'login')
    {
        errors(req,'Maaf halaman ini tidak dapat di akses');
        res.redirect('/');
    }else{
        next();
    }

    
}


function not_back (req,res,next)
{
    const { status } = req.session;
    status == 'login' ? res.redirect('/dashboard') : next();
}



module.exports = { is_login,not_back }