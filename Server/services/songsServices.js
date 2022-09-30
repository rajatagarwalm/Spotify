const axios = require('axios');
require('dotenv').config();
var localStorage = require('node-localstorage').LocalStorage;
localStorage = new localStorage('./localStorage');

module.exports = {
    getSongs: async (apiUrl) => {
        const accessToken = localStorage.getItem('accessToken')
        const request = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        return request.data;
    }
}

