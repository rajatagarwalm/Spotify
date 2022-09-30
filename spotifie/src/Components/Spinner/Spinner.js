import React from "react";
import "./Spinner.css";

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
            <p>please wait...</p>
        </div>
    );
}

export default LoadingSpinner