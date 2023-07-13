import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const buttons = () => {
  return (
    <main>
      <div id="mysidebar" className="sidebar">
        <ul className="sidebar-navlink">
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/backlog">
              <i className="fa-solid fa-chart-simple"></i>
              <span>Backlog</span>
            </Link>
          </li>
          <li>
            <Link to="/board">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Board</span>
            </Link>
          </li>
        </ul>
        <button id="toogleBtn" className="colleps-btn">
          <i className="fa-solid fa-angles-up"></i>
        </button>
      </div>
      <Outlet />
    </main>
  );
};

export default buttons;
