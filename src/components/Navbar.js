import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        <a href="/" style={{ marginLeft: "4rem" }}>
          
          <h2>Energy dApp</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ marginRight: "10rem" }}
          >
            <li style={{ marginLeft: "5%" }} className="nav-item">
              <a className="nav-link" aria-current="page" href="/id-proof">
                <strong>IDProof</strong>
              </a>
            </li>
            <i className="fas fa-book" style={{ marginTop: "0.6%" }}></i>
            <li className="nav-item dropdown" style={{ marginRight: "1%" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/id-proof">
                    IDProof
                  </a>
                 
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/energytrading">
                <strong>Energy</strong>
              </a>
            </li>
            <i className="fas fa-home" style={{ marginTop: "0.5%" }}></i>
            <li className="nav-item dropdown" style={{ marginRight: "1%" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/transactions">
                    Transactions
                  </a>
                  <a className="dropdown-item" href="/prosumers">
                    Prosumers
                  </a>
                </li>
              </ul>
            </li>
           
            {/* ========================================  */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/admin">
                <strong>Admin</strong>
              </a>
            </li>
            <i className="fas fa-user-cog" style={{ marginTop: "0.5%" }}></i>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/termination">
                    Termination
                  </a>
                </li>
              </ul>
            </li>

            {/* ================================= */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
