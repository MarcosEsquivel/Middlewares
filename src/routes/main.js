const express = require('express')

const router = express.Router();

const {main} = require('../controllers/mainController');


router.get('/', main);

module.exports = router;