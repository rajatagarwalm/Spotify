import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"
import { getevergreenSongs, getNewReleaseSongs, getPlaylistsSongsByUrl, getpunjabiSongs } from "../../Services/SongsService";
import { FEATURED_PLAYLISTS_SONGS, NEW_RELEASE_SONGS } from "../../Store/Type";
import store from "../../Store/Store";

const Card = (props) => {

    const navigate = useNavigate();

    const navigateToSongsPage = async () => {
        navigate(`/${props.songsType}`, { state: { songsType: props.songsType, songsPageTitle: props.title } })
    }

    return (
        <div>
            <div className="column">
                <div className="card" onClick={!props.onClick ? navigateToSongsPage : props.onClick}>
                    <h3 className="cardTitle">{props.title}</h3>
                    <img src={props.src} width={props.imageWidth ? props.imageWidth : "80%"} alt="data" />
                </div>
            </div>
        </div>
    );
};

export default Card;