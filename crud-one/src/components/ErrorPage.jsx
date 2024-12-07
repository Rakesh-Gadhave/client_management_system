import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ErrorPage.css';
const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <h1 className="display-4 text-danger">Oops! Something went wrong 😳</h1>
            <p className="lead">
                It seems the internet gremlins are at it again. Maybe they were hungry and ate our code.
            </p>
            <img 
                src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" 
                alt="Confused Server Gif" 
                className="img-fluid mb-4 error-image" 
            />
            <p className="lead">
                Don’t worry, our team of world-class engineers is on it (right after their coffee break).
            </p>
            <p className="text-muted">In the meantime, why not blame it on the weather, Mercury retrograde, or that one guy in IT?</p>
            <Link to="/">
                <button className="btn btn-primary btn-lg">Take Me Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;

