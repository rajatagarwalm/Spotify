import React, { useState } from "react";
import "./Navbar.Module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FEATURED_PLAYLISTS, FEATURED_PLAYLISTS_SONGS, NEW_RELEASE_SONGS, SET_USER_LOGOUT, USER_DETAILS } from '../../Store/Type';

const Navbar = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToHomePage = () => { 
        navigate('/')
    };

    const logoutHandler = () => {
        dispatch({ type: SET_USER_LOGOUT });
        dispatch({ type: NEW_RELEASE_SONGS, payload: [] });
        dispatch({ type: FEATURED_PLAYLISTS_SONGS, payload: [] });
        dispatch({ type: FEATURED_PLAYLISTS, payload: [] });
        dispatch({ type: USER_DETAILS, payload: [] });
    }

    const menuItems = [
        {
            id: 1,
            pageName: "Home",
            linkTo: "/"
        },
        {
            id: 6,
            pageName: "Search",
            linkTo: "/search"
        },
        {
            id: 2,
            pageName: "About",
            linkTo: "/about"
        },
        {
            id: 3,
            pageName: "Policy",
            linkTo: "/policy"
        },
        {
            id: 4,
            pageName: "Feedback",
            linkTo: "/feedback"
        },
        {
            id: 5,
            pageName: "Profile",
            linkTo: "/profile"
        }
    ]

    return (
        <div className="Navbar">
            <span className="navLogo" onClick={navigateToHomePage}>Spotify</span>
            <div className={`navItems ${isNavbarOpen && "open"}`}>
                {
                    menuItems.map(page => <Link to={page.linkTo} key={page.id}>{page.pageName}</Link>)
                }
                <button className="logoutBtn" onClick={logoutHandler}> Logout </button>
            </div>
            <div
                className={`navToggle ${isNavbarOpen && "open"}`}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;