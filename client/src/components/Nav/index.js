import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header>
        <nav className="navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid">
            <div className="navbar-brand-icon">
                    <img id="logo" alt="logo" src="../inject2.png" />
                </div>
              <a className="navbar-brand" href="/"> Get vaxxed!!!!!</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#search">Search</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        </header>
  );
}

export default Nav;

