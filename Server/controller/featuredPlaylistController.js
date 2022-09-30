const { getFeaturedPlaylist } = require('../services/featuredPlaylistService')

module.exports = {
    getAllFeaturedPlaylist: async (req, res) => {
        const options = {
            url: `https://api.spotify.com/v1/browse/featured-playlists`
        }

        const featuredPlaylists = await getFeaturedPlaylist(options)
        res.json(featuredPlaylists.playlists.items)
    },
}