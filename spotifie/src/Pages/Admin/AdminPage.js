import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './AdminPage.css'
import empty from "../../Assets/empty.jpg"
import { getAllFeedbacks } from "../../Services/FeedbackService";
import LoadingSpinner from "../../Components/Spinner/Spinner";

const AdminPage = () => {

    const [allFeedbacks, setAllFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getFeedbacks = async () => {
        setIsLoading(true);
        const allFeedbacksDetails = await getAllFeedbacks();
        setAllFeedbacks(allFeedbacksDetails.feedbacks)
        setIsLoading(false)
    }

    useEffect(() => {
        getFeedbacks();
    },[])

    return (
        <div>
            <Navbar />
            {isLoading ? <LoadingSpinner /> :
                <center>
                    <h2>Feedbacks</h2>
                    {!allFeedbacks.length ? <img src={empty} alt="empty" /> :
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Message</th>
                                    </tr>
                                    {allFeedbacks.map((feedback, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{feedback.name}</td>
                                                <td>{feedback.emailId}</td>
                                                <td>{feedback.message}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </center>
            }
        </div>
    )
}

export default AdminPage;