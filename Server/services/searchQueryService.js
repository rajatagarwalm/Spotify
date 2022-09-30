const axios = require('axios');
var localStorage = require('node-localstorage').LocalStorage;
localStorage = new localStorage('./localStorage');

module.exports = {
    getSearchSongs: async (searchQuery) => {
        const accessToken = localStorage.getItem('accessToken');
        const request = await axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=50`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            json: true
        })
        return request.data;
    }
}