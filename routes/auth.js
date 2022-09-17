const {Router} = require('express');
const { googleAuth } = require('../controller/authController');

const router = Router();


router.post('/google', googleAuth)

module.exports = router;