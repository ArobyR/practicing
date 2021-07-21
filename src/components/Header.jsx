import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setisNavCollapsed] = useState(false);

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <h2 className="navbar-brand">Context App</h2>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          onClick={() => setisNavCollapsed(!isNavCollapsed)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navbar-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
