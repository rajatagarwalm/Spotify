const express = require('express')
const router = express.Router()

const { getSearchQuerySongs } = require('../controller/searchQueryController');

router.post('/searchSongs', getSearchQuerySongs)

module.exports = router;