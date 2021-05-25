import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="container">
            <div className="card fluid">
                <div className="card-header fluid bg-orange">
                    <h1>Welcome to our site!</h1>
                </div>
                <div className="card-body">
                    <p>This is a vaccination search website!</p>
                    <p>You can search zip /city to find the vaccine spot near you!</p>
                    <Link to="/search" className="btn btn-warning">Let's try it !</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;