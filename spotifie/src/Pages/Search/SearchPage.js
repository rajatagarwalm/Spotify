import React, { Fragment, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DisplayTracks from "../../Components/Song/Song";
import Player from "../../Components/Player/Player";
import './SearchPage.css'
import { searchQuerySongs } from "../../Services/SongsService";
import empty from "../../Assets/empty.jpg";
import LoadingSpinner from "../../Components/Spinner/Spinner";

const SearchPage = () => {

    const [selectedSong, setSelectedSong] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [songs, setSongs] = useState([]);

    const chooseTrack = (song) => {
        setSelectedSong(song);
    }

    const searchInputHandler = (event) => {
        setSearchQuery(event.target.value);
    }

    const searchClickHandler = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        if (!searchQuery) {
            alert('Please enter something in search box');
            setIsLoading(false);
            setSongs([]);
            return;
        }
        const searchedSongs = await searchQuerySongs(searchQuery);
        setSongs(searchedSongs);
        setSearchQuery('')
        setIsLoading(false);
    }

    return (
        <Fragment>
            <Navbar />
            <div className="upperContainer" style={!selectedSong ? { marginBottom: "10px" } : { marginBottom: "100px" }}>
                <form onSubmit={searchClickHandler} className="search">
                    <input type="text" className="searchTerm" id="input_text" onChange={searchInputHandler} value={searchQuery} placeholder="Please enter something...."></input>
                    <button type="submit" className="searchButton" onClick={searchClickHandler}>
                        Search
                    </button>
                </form>
                {isLoading ? <LoadingSpinner /> :
                    songs.length === 0 ? <img src={empty} alt="empty" /> :
                        <div className="container">
                            {
                                songs.map(song => <DisplayTracks track={song} key={song.uri} chooseTrack={chooseTrack} />)
                            }
                        </div>
                }
            </div>

            {selectedSong &&
                <div className="footerPlayer">
                    <Player song={selectedSong} />
                </div>
            }
        </Fragment>
    )
}

export default SearchPage;