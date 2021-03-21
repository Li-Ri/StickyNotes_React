import React from "react";
import "./Navbar.css";

const Nav = (props) => {
  return (
    <div className="navbar">
      <div className="title">Sticky Notes</div>
      <div className="main_nav">
        <ul className="main_nav_links">
          <li className="main_nav_link">
            <h3 href="">Notes</h3>
          </li>
          <li className="main_nav_link">
            <h3 onClick={props.newNote}>Make a Note</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
