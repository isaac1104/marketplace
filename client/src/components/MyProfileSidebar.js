import React from "react";
import { NavLink } from 'react-router-dom';

const MyProfileSidebar = () => {
    return (
      <div className="position-sticky pt-3">
        <div className="navbar-light p-md-3 p-2 border">
          <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/my-profile" className="nav-link" activeStyle={{color:"black"}}><i className="fa fa-user" aria-hidden="true"></i> Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/my-posts" className="nav-link" activeStyle={{color:"black"}}><i className="fa fa-file-text" aria-hidden="true"></i> My Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/my-comments" className="nav-link" activeStyle={{color:"black"}}><i className="fa fa-comment" aria-hidden="true"></i> My Comments</NavLink>
              </li>
            </ul>
        </div>
      </div>
    );
}

export default MyProfileSidebar;
