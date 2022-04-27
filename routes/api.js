const express = require('express');
const router = express.Router();

const { api_list } = require('../controllers/SertifikatControllers');

const { api_search } = require('../controllers/ApiControllers')

router.get('/sertifikat-all',api_list)
router.get('/nik/:nik/id/:id',api_search)   
module.exports = router;