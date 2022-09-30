import axios from "axios";

export const login = async () => {
    const authorizationCode = new URLSearchParams(window.location.search).get("code");
    const authorizationState = new URLSearchParams(window.location.search).get("state");
    const loginRequest = await axios
        .post("http://localhost:3001/api/login", {
            authorizationCode,
            authorizationState
        })
    return loginRequest.status;
}