const express = require('express')
const router = express.Router()

const { getNewReleaseSongs, getPlaylistsSongs, getEvergreenSongs, getPunjabiSongs } = require('../controller/songsController')

router.get('/newReleaseSongs', getNewReleaseSongs)
router.post('/playlistsSongsByUrl', getPlaylistsSongs)
router.get('/evergreenSongs', getEvergreenSongs)
router.get('/punjabiSongs', getPunjabiSongs)

module.exports = router;