const express = require('express')
const router = express.Router()

const { getAllFeaturedPlaylist } = require('../controller/featuredPlaylistController')

router.get('/featuredPlaylists', getAllFeaturedPlaylist)

module.exports = router;