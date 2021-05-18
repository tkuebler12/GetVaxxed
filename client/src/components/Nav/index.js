import React from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./Nav.css";

function Nav({loggedIn}) {

  return (
    <header>
      <nav className="navbar-expand-lg navbar navbar-light">
        <div className="container-fluid">
          <div className="navbar-brand-icon">
            <img id="logo" alt="logo" src="../inject2.png" />
          </div>
          <a className="navbar-brand" href="/"> GetVaxxed<sup>!!!</sup></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {loggedIn ?<Link to="/" className="nav-link active">Home</Link> : <Link to="/" className="nav-link active">Login</Link>} 
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Search</Link>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <li className="nav-item">
                <a className="nav-link" href="#home" id="userDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="user" className="img-profile rounded-circle"
                    src="../user2.png"></img>
                </a>
              </li>
              <li>
                {loggedIn ? <Button variant="danger btn-sm" >Logout</Button> : <Button variant="success btn-sm" >Have to Login!</Button>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

