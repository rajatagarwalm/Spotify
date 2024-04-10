import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './FeedbackPage.css';
import { postFeedback } from "../../Services/FeedbackService";
import LoadingSpinner from "../../Components/Spinner/Spinner";

const Feedback = () => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserEmail, setEnteredUserEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const nameInputHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const emailInputHandler = (event) => {
        setEnteredUserEmail(event.target.value);
    }

    const messageInputHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if (enteredUserEmail === "" && enteredUserName === "" && enteredMessage === "") {
            alert("Please enter valid data");
            setIsLoading(false)
            return;
        }
        let feedbackDetails = {
            emailId: enteredUserEmail,
            name: enteredUserName,
            message: enteredMessage
        }
        postFeedback(feedbackDetails)
        setEnteredUserName('');
        setEnteredUserEmail('');
        setEnteredMessage('');
        setIsLoading(false);
        alert("Message saved successfully");
    }

    return (
        <div>
            <Navbar />
            {isLoading && <LoadingSpinner />}
            <div className="mainContainer">
                <div className="formContainer">
                    <form className="feedBackForm" onSubmit={formSubmitHandler}>
                        <label>Name</label>
                        <input className="userNameInput" type="text" name="user_name" onChange={nameInputHandler} value={enteredUserName} />
                        <label>Email</label>
                        <input className="userEmailInput" type="email" name="user_email" onChange={emailInputHandler} value={enteredUserEmail} />
                        <label>Message</label>
                        <textarea className="messageInput" name="message" onChange={messageInputHandler} value={enteredMessage} />
                        <input className="submitButton" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;