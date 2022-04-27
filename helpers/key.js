const create_key = () => 
{
    const waktu = new Date();
    const key = `${waktu.getHours()}-${waktu.getMilliseconds()}`;
    return key;
}


module.exports = { create_key }