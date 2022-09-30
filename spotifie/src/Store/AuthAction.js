import { FEATURED_PLAYLISTS_SONGS, SEARCH_SONGS } from './Type';
import { LOGIN, SET_USER_LOGIN, SET_USER_LOGOUT, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, NEW_RELEASE_SONGS, USER_FEEDBACKS, USER_DETAILS, FEATURED_PLAYLISTS } from './types';

export const login = () => ({
    type: LOGIN
})

export const setUserLogin = () => ({
    type: SET_USER_LOGIN
});

export const setUserLogout = () => ({
    type: SET_USER_LOGOUT
});

export const addToFavourites  = () => ({
    type: ADD_TO_FAVOURITES
});

export const removeFromFavourites = () => ({
    type: REMOVE_FROM_FAVOURITES
});

export const newReleaseSongs = () => ({
    type: NEW_RELEASE_SONGS
});

export const userFeedbacks = () => ({
    type: USER_FEEDBACKS
});

export const userDetails = () => ({
    type: USER_DETAILS
});

export const featuredPlaylists = () => ({
    type: FEATURED_PLAYLISTS
});

export const featuredPlaylistsSongs = () => ({
    type: FEATURED_PLAYLISTS_SONGS
});

export const searchQuerySongs = () => ({
    type: SEARCH_SONGS
});

