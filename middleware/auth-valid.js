const { check,body } = require('express-validator');

const validation = [
    body('email').isEmail().withMessage('Masukan email yang valid'),
    body('password').trim()
]
module.exports = { validation }