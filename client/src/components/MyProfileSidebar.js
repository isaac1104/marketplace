import React from "react";
import { Link } from 'react-router-dom';

const MyProfileSidebar = () => {
    return (
      <div className="position-sticky pt-3">
        <div className="navbar-light p-md-3 p-2 border">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/my-profile" className="nav-link"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/my-posts" className="nav-link"><i className="fa fa-file-text" aria-hidden="true"></i> My Posts</Link>
              </li>
              <li className="nav-item">
                <Link to="/my-comments" className="nav-link"><i className="fa fa-comment" aria-hidden="true"></i> My Comments</Link>
              </li>
            </ul>
        </div>
      </div>
    );
}

export default MyProfileSidebar;
