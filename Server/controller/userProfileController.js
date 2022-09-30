const {getUserDetails} = require('../services/userService')

module.exports = {
    getUserProfile: async (req, res) => {
        const options = {
            url: `https://api.spotify.com/v1/me`
        }

        const userProfile = await getUserDetails(options)
        res.json(userProfile)
    }
};