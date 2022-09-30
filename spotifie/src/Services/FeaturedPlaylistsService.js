import axios from "axios";

export const getfeaturedPlaylists = () => {
    let featuredPlaylists = []
    return axios
        .get("http://localhost:3001/api/featuredPlaylists")
        .then(res => {
            res.data.map((playlist) => {
                return featuredPlaylists.push({
                    id: playlist.id,
                    trackUrl: playlist.href,
                    imageUrl: playlist.images[0].url,
                    name: playlist.name,
                    description: playlist.description,
                    uri: playlist.uri
                });
            })
            return featuredPlaylists;
        }).catch((error) => {
            console.log(error);
        })
}