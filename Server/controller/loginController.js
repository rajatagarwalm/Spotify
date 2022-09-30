require('dotenv').config();
const { getAccessToken } = require('../services/loginService')

module.exports = {
    login: async (req, res) => {
        const authorizationCode = req.body.authorizationCode || null;
        getAccessToken(authorizationCode)
            .then(() => {
                res.json({ message: 'Login success', status: 200 })
            }).catch((error) => {
                console.log(error.message)
            })
    },
};

