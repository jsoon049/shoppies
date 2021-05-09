import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">The Shoppies</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Nominations</Link>
            </li>

            <li>
              <Link to="/search" className="btn btn-main">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
