import React from "react";
// import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container-fluid">
          <h3 className="navbar-brand">
            Text-App
          </h3>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h3 className="nav-link" aria-current="page" >
                  <b>Home</b> 
                </h3>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => props.modeToggler("black")}
                />
                <label
                  className={`form-check-label text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.Mode === "light" ? "light" : "dark"}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
