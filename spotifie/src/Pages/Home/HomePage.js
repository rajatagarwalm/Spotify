import React, { Fragment, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import './HomePage.css';

import top_20 from "../../Assets/top_20.jpg"
import punjabi from "../../Assets/punjabi.jpg"
import evergreen from "../../Assets/evergreen.jpg"
import featuredPlaylists from "../../Assets/featuredPlaylist.jpg"
import { login } from "../../Services/LoginService";
import { useNavigate } from "react-router-dom";
import { getfeaturedPlaylists } from "../../Services/FeaturedPlaylistsService";
import store from '../../Store/Store';
import { FEATURED_PLAYLISTS, FEATURED_PLAYLISTS_SONGS, NEW_RELEASE_SONGS, SET_USER_LOGOUT, USER_DETAILS } from "../../Store/Type";

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const callLoginApi = async () => {
            const loginRequest = await login();
            if (loginRequest === 200) {
                window.history.pushState({}, null, "/")
            } else {
                store.dispatch({ type: SET_USER_LOGOUT })
                store.dispatch({ type: NEW_RELEASE_SONGS, payload: [] });
                store.dispatch({ type: FEATURED_PLAYLISTS_SONGS, payload: [] });
                store.dispatch({ type: FEATURED_PLAYLISTS, payload: [] });
                store.dispatch({ type: USER_DETAILS, payload: [] });
            }
        }
        callLoginApi();
    })

    const navigateToFeaturedPlaylistsPage = async () => {
        // const featuredPlaylists = await getfeaturedPlaylists();
        // if(featuredPlaylists){
        //     store.dispatch({ type: FEATURED_PLAYLISTS, payload: featuredPlaylists })
            
        // }
        navigate('./featuredPlaylistsPage');
    }

    return (
        <Fragment>
            <Navbar />
            <div className="Row">
                <Card title="New release songs" src={top_20} songsType="newReleaseSongs" />
                <Card title="Top punjabi songs" src={punjabi} songsType="punjabiSongs" />
                <Card title="Evergreen songs" src={evergreen} songsType="evergreenSongs" />
                <Card title="Some featured Playlists" src={featuredPlaylists} onClick={navigateToFeaturedPlaylistsPage} />
            </div>
        </Fragment>
    );
}

export default Home;