import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Player from "../../Components/Player/Player";
import "./SongPage.css"
import DisplayTracks from "../../Components/Song/Song";
import { useLocation } from "react-router-dom";
import store from "../../Store/Store";
import { getevergreenSongs, getNewReleaseSongs, playlistsSongsByUrl, getpunjabiSongs } from "../../Services/SongsService";
import { FEATURED_PLAYLISTS_SONGS } from "../../Store/Type";
import LoadingSpinner from "../../Components/Spinner/Spinner";

const SongsPage = () => {

    const { state } = useLocation();
    const { songsType } = state;
    const { songsPageTitle } = state;
    const { trackUrl } = state;
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const chooseTrack = (song) => {
        setSelectedSong(song);
    }

    const storeSongsInRedux = (songs) => {
        if (songs) {
            store.dispatch({ type: FEATURED_PLAYLISTS_SONGS, payload: songs })
        } else {
            alert("something went wrong");
        }
    }

    const getSongsFromRedux = async () => {
        setIsLoading(true);
        switch (songsType) {
            case 'newReleaseSongs':
                const newReleaseSongs = await getNewReleaseSongs();
                storeSongsInRedux(newReleaseSongs);
                setIsLoading(false);
                break;

            case 'punjabiSongs':
                const punjabiSongs = await getpunjabiSongs();
                storeSongsInRedux(punjabiSongs);
                setIsLoading(false);
                break;

            case 'evergreenSongs':
                const evergreenSongs = await getevergreenSongs();
                storeSongsInRedux(evergreenSongs);
                setIsLoading(false);
                break;
            case 'playlistsSongs':
                const playlistSongs = await playlistsSongsByUrl(trackUrl)
                storeSongsInRedux(playlistSongs);
                setIsLoading(false);
                break;
            default: 
                break;
        }
        setSongs(store.getState().authReducer.featuredPlaylistsSongs)
    }

    useEffect(() => {
        getSongsFromRedux();
    }, [songsType])

    return (
        <div>
            <Navbar />
            <center><h2>{songsPageTitle}</h2></center>
            {isLoading ? <LoadingSpinner /> :
                <div className="upperContainer" style={!selectedSong ? { marginBottom: "10px" } : { marginBottom: "100px" }}>
                    <div className="container">
                        {
                            songs.map(song => <DisplayTracks track={song} key={song.uri} chooseTrack={chooseTrack} />)
                        }
                    </div>
                </div>
            }
            {selectedSong &&
                <div className="footerPlayer">
                    <Player song={selectedSong} />
                </div>
            }
        </div>
    )
}

export default SongsPage;