import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
        <Link to="/addsongs">Add Songs</Link>
      </li>
    </ul>
  );
};

export default Header;
