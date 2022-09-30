const request = require('request');
require('dotenv').config();
var localStorage = require('node-localstorage').LocalStorage;
localStorage = new localStorage('./localStorage');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

module.exports = {
    getAccessToken: async (authorizationCode) => {
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: authorizationCode,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
                show_dialog: true
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
            },

            json: true
        };

        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                localStorage.setItem("accessToken", body.access_token);
                return body;
            }
        })
    }
}