import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidenav">
      <Link to="/home">MENU 1</Link>
      <Link to="/home">MENU 2</Link>
    </div>
  );
}

export default Sidebar;
