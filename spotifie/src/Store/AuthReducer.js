import * as types from './Type';

const initialState = {
    isUserLogin: false,
    newReleaseSongs: [],
    allfeedbacks: [],
    userDetail: [],
    featuredPlaylists: [],
    featuredPlaylistsSongs: [],
    searchSongs: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_LOGIN:
            return { ...state, ...{ isUserLogin: true } }
        case types.SET_USER_LOGOUT:
            return { ...state, ...{ isUserLogin: false } }
        case types.NEW_RELEASE_SONGS:
            return { ...state, ...{ newReleaseSongs: action.payload } }
        case types.USER_FEEDBACKS:
            return { ...state, ...{ allfeedbacks: action.payload } }
        case types.USER_DETAILS:
            return { ...state, ...{ userDetail: action.payload } }
        case types.FEATURED_PLAYLISTS:
            return { ...state, ...{ featuredPlaylists: action.payload } }
        case types.FEATURED_PLAYLISTS_SONGS:
            return { ...state, ...{ featuredPlaylistsSongs: action.payload } }
        case types.SEARCH_SONGS:
            return { ...state, ...{ searchSongs: action.payload } }
        default:
            return state
    }
}

export default authReducer