const { getSearchSongs } = require('../services/searchQueryService');

module.exports = {
    getSearchQuerySongs : async(req, res) => {
        const searchQuery = req.body.searchQuery;
        const searchSongs = await getSearchSongs(searchQuery)
        res.json(searchSongs.tracks.items);
    }
}