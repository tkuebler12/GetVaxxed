import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
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
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#search">Search</a>
              </li>
              <div className="topbar-divider d-none d-sm-block"></div>
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#home" id="userDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                  <img alt="user" className="img-profile rounded-circle"
                    src="../user.png"></img>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#home">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Login
                                </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#home" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

