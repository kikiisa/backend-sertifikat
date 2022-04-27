const validasi = require('@danangkonang/js-validation');

const validasi_sertifikat = (req,res,next) => 
{
    const { title,theme,leader,co } = req.body
    let form = [
        {
            data:title,
            rules:'required',
            messages: 'title required',
            key:title
        },
        {
            data:theme,
            rules:'required',
            messages: 'theme required',
            key:theme
        },
        {
            data:leader,
            rules:'required',
            messages: 'leader required',
            key:leader
        },
        {
            data:co,
            rules:'required',
            messages: 'co-leader required',
            key:co
        },
    ]
    let validate = validasi.validation(form);
    if (!validate.isValid) {
        validate.errors.map((value,index)=>{
            req.flash(`error_${index}`,`<p class="text-danger">* ${value.message} *</p>`);
        });
        return res.redirect('/new-sertifikat');
    }
    next();
}


module.exports = { validasi_sertifikat }
