import React from "react"
import ReactAudioPlayer from "react-audio-player";
import './Player.css';

const Player = ({ song }) => {

    return (
        <div>
            {song.previewUrl ?
                <div className="playerContainer">
                    <span><b>{song.title}</b> by {song.artist}</span>
                    <ReactAudioPlayer
                        className="player"
                        src={song.previewUrl}
                        autoPlay
                        controls
                        loop
                    />
                </div> : <div style={{ color: 'red' }}>
                    <h3>Premium required!!</h3>
                </div>}
        </div>
    );
}

export default Player;