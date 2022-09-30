const axios = require('axios');
require('dotenv').config();
var localStorage = require('node-localstorage').LocalStorage;
localStorage = new localStorage('./localStorage');

module.exports = {
    getFeaturedPlaylist: async (options) => {
        const accessToken = localStorage.getItem('accessToken')
        const request = await axios.get(options.url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return request.data;
    }
}
