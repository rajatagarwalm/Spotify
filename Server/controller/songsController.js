const { getSongs } = require('../services/songsServices')

module.exports = {
    getNewReleaseSongs: async (req, res) => {
        const newReleaseSongsUrl = 'https://api.spotify.com/v1/browse/new-releases';
        const newReleaseSongs = await getSongs(newReleaseSongsUrl)
        res.json(newReleaseSongs.albums.items)
    },

    getEvergreenSongs: async (req, res) => {
        const evergreenSongsUrl = 'https://api.spotify.com/v1/playlists/4jsShz4PIY4CvirXMDUTsy';
        const evergreenSongs = await getSongs(evergreenSongsUrl)
        res.json(evergreenSongs.tracks.items)
    },

    getPunjabiSongs: async (req, res) => {
        const punjabiSongsUrl = 'https://api.spotify.com/v1/playlists/3HcJoCoDBCfBjjEc2OEDfb';
        const punjabiSongs = await getSongs(punjabiSongsUrl)
        res.json(punjabiSongs.tracks.items)
    },
    
    getPlaylistsSongs: async (req, res) => {
        const playlistsSongsUrl = req.body.apiUrl;
        const punjabiSongs = await getSongs(playlistsSongsUrl)
        res.json(punjabiSongs.tracks.items)
    }
};