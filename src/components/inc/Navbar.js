import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo3.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg  shadow sticky-top navcolor">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt=""
              width="125"
              height="38"
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Pathshala
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/gallery" className="nav-link ">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link  ">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link  ">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Navbar;
