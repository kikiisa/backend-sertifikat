const Users = require('../models/UsersModels');
const bcrypt = require('bcrypt');
const {validationResult } = require('express-validator');
const { alert,errors } = require('../helpers/message')

const Login_view = async (req,res,next) =>
{
    res.render('index',{
    title:'Login'
    });
}

const Auth = async (req,res,next) =>
{
    const pesan = validationResult(req);
    if (!pesan.isEmpty()) {
        const data = pesan.array();
        data.map((value,index) => {
            req.flash('eror',`<small class="text-danger">${data[index].msg}</small>`)
        });
        res.redirect('/');
    }else
    {    
        const { email,password} = req.body
        try {
            const user = await Users.findAll({
                where:{
                    email:email
                }
            });
            const match = await bcrypt.compareSync(password,user[0].password);
            if(!match)
            {
                errors(req,'Maaf username dan password anda tidak cocok')
                res.redirect('/')
            }else{
                req.session.status = 'login';
                res.redirect('/dashboard');
            }
        } catch (error) {
            errors(req,'Maaf username dan password anda tidak cocok')
            res.redirect('/')
        }
    }   
}
const log =(req,res,next) => 
{
    if(req.body.logout)
    {
        req.session.destroy();
        res.redirect('/');
    }else{
        res.redirect('/'); 
    }
}


module.exports = { Login_view,Auth,log }