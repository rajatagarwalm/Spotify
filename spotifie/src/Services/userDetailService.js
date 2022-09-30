import axios from "axios";

export const getUserDetails = () => {
    return axios
        .get("http://localhost:3001/api/userProfile")
        .then(res => {
            return {
                name : res.data.display_name,
                email : res.data.email,
                followers: res.data.followers.total,
                country: res.data.country,
                imageUrl: res.data.images[0].url
            }
        })
}