import axios from "axios";

const smallImageSelector = (imagesArray) => {
    const smallestAlbumImage = imagesArray.reduce(
        (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
        },
        imagesArray[0]
    )
    return smallestAlbumImage
}

const managePlaylistSongsResponse = (responseSongs) => {
    let playlistSongs = [];
    responseSongs.map((song) => {
        return playlistSongs.push({
            artist: song.track.artists[0].name,
            title: song.track.name,
            uri: song.track.uri,
            albumUrl: smallImageSelector(song.track.album.images).url,
            previewUrl: song.track.preview_url
        })
    })
    return playlistSongs;
}

export const getNewReleaseSongs = () => {
    let newReleaseSongs = []
    return axios
        .get("http://localhost:3001/api/newReleaseSongs")
        .then((res) => {
            res.data.map((song) => {
                return newReleaseSongs.push({
                    artist: song.artists[0].name,
                    title: song.name,
                    uri: song.uri,
                    albumUrl: smallImageSelector(song.images).url,
                    previewUrl: null
                })
            })
            return newReleaseSongs;
        }).catch((error) => {
            console.log(error);
        })
}

export const getpunjabiSongs = () => {
    return axios
        .get("http://localhost:3001/api/punjabiSongs")
        .then((res) => {
            const punjabiSongs = managePlaylistSongsResponse(res.data)
            return punjabiSongs;
        })
        .catch((error) => {
            console.log(error);
        })
}

export const getevergreenSongs = async () => {
    const evergreenSongsRequest = await axios
        .get("http://localhost:3001/api/evergreenSongs")
    if (evergreenSongsRequest.status === 200) {
        const evergreenSongs = managePlaylistSongsResponse(evergreenSongsRequest.data)
        return evergreenSongs;
    }
}

export const playlistsSongsByUrl = async (apiUrl) => {
    const playlistSongsByUrlRequest = await axios
        .post("http://localhost:3001/api/playlistsSongsByUrl", {
            apiUrl: apiUrl
        })
    if (playlistSongsByUrlRequest.status === 200) {
        const playlistsSongs = managePlaylistSongsResponse(playlistSongsByUrlRequest.data)
        return playlistsSongs;
    }
}

export const searchQuerySongs = (searchQuery) => {
    let searchSongs = [];
    return axios.post('http://localhost:3001/api/searchSongs', {
        searchQuery: searchQuery
    }).then((res) => {
        res.data.map((song) => {
            return searchSongs.push({
                artist: song.artists[0].name,
                title: song.name,
                uri: song.uri,
                albumUrl: smallImageSelector(song.album.images).url,
                previewUrl: song.preview_url
            })
        })
        return searchSongs;
    }).catch((error) => {
        console.log(error);
    })
}