import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { getUserDetails } from "../../Services/UserDetailService";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import "./ProfilePage.css"

const Profile = () => {

    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchUserDetailsData = async () => {
        const userDetails = await getUserDetails();
        setUserData(userDetails);
    }

    useEffect(() => {
        fetchUserDetailsData();
    }, [])

    return (
        <div>
            <Navbar />
            {isLoading ? <LoadingSpinner /> :
                <div className="main-container">
                    <div className="card-container">
                        
                        <header>
                            <img className="profileImage" src={userData.imageUrl} alt={userData.name} />
                        </header>
                        <h1 className="bold-text">
                            {userData.name}
                        </h1>
                        <h1 className="bold-text">
                            {userData.email}
                        </h1>
                        <h2 className="normal-text">{userData.country}</h2>
                        <div className="social-container">
                            <div className="followers">
                                <h1 className="bold-text">{userData.followers}</h1>
                                <h2 className="smaller-text">Followers</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;