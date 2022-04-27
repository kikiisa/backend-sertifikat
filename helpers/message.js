const alert = (request,pesan) => 
{
    return request.flash('alert',`<small class="text-info">${pesan}</small>`)
}
const errors = (request,pesan) => 
{
    return request.flash('error',`<small class="text-danger">${pesan}</small>`)
}
module.exports = { alert,errors }
