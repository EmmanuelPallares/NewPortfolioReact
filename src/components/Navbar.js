import React from "react";
import logo from "../assets/vitoz.dev.logo.png";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { Link } from "gatsby";
const Navbar = ({ toogleSidebar }) => {
  return (
    <nav className="navbar ">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} width="250" height="50" alt="logoPapriOficial" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toogleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
