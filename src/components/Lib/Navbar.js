import React, { Component } from "react";
import "./navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
//import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation" >
        <div className="container-fluid">
          <a href="/" style={{ marginTop: "-10px" }}>
            <h2> Energy dApp</h2>
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
              style={{ marginRight: "4rem", marginTop: "-8px" }}
            >
              <li
                style={{ marginLeft: "5%", marginTop: "0.2%" }}
                className="nav-item"
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/id-proof"
                  style={{ marginTop: "0.2%" }}
                >
                  <strong>IDProof</strong>
                </a>
              </li>
              <i className="fas fa-book" style={{ marginTop: "0.7%" }}></i>
              <li className="nav-item dropdown" style={{ marginRight: "0.5%" }}>
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
                      Upload Proof ID
                    </a>
                    {/* <a className="dropdown-item" href="/lib-librarian">
                      Librarian
                    </a> */}
                  </li>
                  <li></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/energytrading">
                  <strong>Energy</strong>
                </a>
              </li>
              <i className="fas fa-home" style={{ marginTop: "0.5%" }}></i>
              <li className="nav-item dropdown" style={{ marginRight: "0.5%" }}>
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
              {/* ============= */}
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
              {/* ============ */}
            </ul>
          </div>
        </div>
        <a
          target="_blank"
          className="text-muted h6 small  text-decoration-none"
          rel="noopener noreferrer"
          href={"https://etherscan.io/address/" + this.props.account}
        >
          {this.props.account ? this.props.account.substring(0, 6) : "0x0"}
          ...
          {this.props.account ? this.props.account.substring(38, 42) : "0x0"}
        </a>
        &nbsp;
        <a style={{ marginRight: "2%" }}>
          <FontAwesomeIcon icon={faUserCircle} size="2x" color="black" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
