const express = require('express')
const router = express.Router();

const {admin} = require('../controllers/adminController');

const userAcces = require('../middlewares/userAcces')

router.get('/', userAcces, admin)



module.exports = router;