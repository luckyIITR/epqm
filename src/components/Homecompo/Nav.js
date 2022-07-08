import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="sticky-top navbar navbar-expand-sm navbar-light bg-light mb-3 mt-md-3">
      <hr class="mt-2 mb-3" />
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center navcolor"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-fill nav-pills hover">
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/scope">
                SCOPE
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/committee">
                COMMITTEE
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/speakers">
                SPEAKERS
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4 text-nowrap" to="/dates">
                IMPORTANT DATES
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/programs">
                PROGRAM
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/registration">
                REGISTRATION
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link pl-4 pr-4 text-nowrap"
                to="/papersubmission"
              >
                PAPER SUBMISSION
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/sponsors">
                SPONSORS
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link pl-4 pr-4" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
