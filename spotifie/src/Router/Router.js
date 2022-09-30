import { Routes, Route } from "react-router-dom";
import About from '../Pages/About/AboutPage';
import Home from '../Pages/Home/HomePage';
import Policy from '../Pages/Policy/PolicyPage';
import Profile from "../Pages/Profile/ProfilePage";
import SongsPage from "../Pages/Songs/SongsPage";
import Feedback from "../Pages/Feedback/FeedbackPage";
import AdminPage from "../Pages/Admin/AdminPage";
import FeaturedPlaylists from "../Pages/FeaturedPlaylists/FeaturedPlaylistsPage";
import SearchPage from "../Pages/Search/SearchPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<Policy />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/:songsType" element={<SongsPage />} />
            <Route exact path="featuredPlaylistsPage/:songsType" element={<SongsPage />} />
            <Route exact path="/adminPage" element={<AdminPage />} />
            <Route exact path="/featuredPlaylistsPage" element={<FeaturedPlaylists />} />
            <Route exact path="/search" element={<SearchPage />} />
        </Routes>
    );
};

export default Router;