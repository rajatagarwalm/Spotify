import axios from "axios";

export const getAllFeedbacks = () => {
    return axios
        .get("https://whkbjhk3z9.execute-api.us-west-2.amazonaws.com/feedback/getuserfeedbacks")
        .then((res) => {
            console.log(res.data);
            return res.data;
        }).catch((error) => {
            console.log(error);
        })   
}

export const postFeedback = (feedbackDetails) => {
    console.log(feedbackDetails);
    axios
        .post("https://whkbjhk3z9.execute-api.us-west-2.amazonaws.com/feedback/postuserfeedback", {
            emailId: feedbackDetails.emailId,
            name: feedbackDetails.name,
            message: feedbackDetails.message
        }).then((res) => {
            return res.data;
        }).catch((error) => {
            alert(error);
        });
}