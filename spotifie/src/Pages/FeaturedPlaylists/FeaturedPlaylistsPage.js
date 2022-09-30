import React, { Fragment, useEffect, useState } from "react";
import './FeaturedPlaylistsPage.css';
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getfeaturedPlaylists } from "../../Services/FeaturedPlaylistsService";
import LoadingSpinner from "../../Components/Spinner/Spinner";

const FeaturedPlaylists = () => {

    const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchfeaturedPlaylists = async () => {
        setIsLoading(true)
        const playlists = await getfeaturedPlaylists();
        setFeaturedPlaylists(playlists);
        setIsLoading(false)
    }

    useEffect(() => {
        fetchfeaturedPlaylists();
    }, [])


    const cardClickHandler = async (playlist) => {
        navigate(`./${playlist.name.split(" ").join("")}`, { state: { songsType: 'playlistsSongs', songsPageTitle: playlist.name, trackUrl: playlist.trackUrl } })
    }

    return (
        <Fragment>
            <Navbar />
            {
                isLoading ? <LoadingSpinner /> :
                    featuredPlaylists.map((playlist, index) => {
                        return (
                            <div className="column" key={index}>
                                <div className="card" onClick={() => cardClickHandler(playlist)}>
                                    <h3 className="playlistTitle">{playlist.name}</h3>
                                    <img src={playlist.imageUrl} width={"80%"} alt="data" />
                                </div>
                            </div>
                        )
                    })
            }
        </Fragment>
    )
}

export default FeaturedPlaylists