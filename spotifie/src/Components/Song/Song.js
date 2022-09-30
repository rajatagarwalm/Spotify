import React from "react";
import './Song.css';

const DisplayTrack = (props) => {

    const handlePlay = () => {
        props.chooseTrack(props.track);
    }

    return (
        <div className="singleRow" onClick={handlePlay}>
            <img src={props.track.albumUrl} alt="Song Album img" />
            <div className="description">
                <p className="title">{props.track.title}</p>
                <p className="artist">{props.track.artist}</p>
            </div>
        </div>
    )
}

export default DisplayTrack;