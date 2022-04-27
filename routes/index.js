const express = require('express');
const router = express.Router();
const { Login_view,Auth,log } = require('../controllers/LoginControllers');
const { Dashboard } = require('../controllers/DashboardControllers');
const { new_sertifikat,sertifikat,list_sertifikat } = require('../controllers/SertifikatControllers');
const { body } = require('express-validator');
const { validation } = require('../middleware/auth-valid');
const { is_login,not_back } = require('../middleware/authentikasi');
const { validasi_sertifikat} = require('../validation/validasi');

router.get('/',not_back,Login_view);
router.post('/auth',validation,Auth);
router.get('/dashboard',is_login,Dashboard);
router.get('/new-sertifikat',is_login,new_sertifikat);
router.post('/log',log)
router.post('/store-sertifikat',is_login,validasi_sertifikat,sertifikat);
router.get('/list-sertifikat',is_login,list_sertifikat);
module.exports = router;
