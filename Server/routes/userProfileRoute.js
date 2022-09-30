const express = require('express')
const router = express.Router()

const { getUserProfile } = require('../controller/userProfileController');

router.get('/userProfile', getUserProfile)

module.exports = router;