import React from "react";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from '../../Store/Type';
import './LoginPage.css'
import profile from '../../Assets/profile.png'

const LoginPage = () => {

    const dispatch = useDispatch();
    const generateRandomString = (lengthOfString) => {
        return Math.random().toString(36).substring(2, lengthOfString + 2);
    }

    const getAccessFromSpotify = () => {
        const state = generateRandomString(16);
        const scope = process.env.REACT_APP_SCOPE;
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const redirectUri = process.env.REACT_APP_REDIRECT_URI;
        const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
        window.location = url;
        dispatch({ type: SET_USER_LOGIN })
    }

    return (
        <div className="main">
            <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                </div>
                <div>
                    <h1>Spotify</h1>
                    <div className="login-button-container">
                        <button className="login-button" onClick={getAccessFromSpotify}>Login with spotify</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;