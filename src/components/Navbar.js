import React from "react"
import logo from "../assets/logo.gif"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = () => {
  return <nav className="navbar " >
    <div className="nav-center">
    <div className="nav-header">
      <Link to='/'>
       
      <img src={logo} alt="logoPapriOficial"></img>
      
      </Link>
      <button type="button" className="toggle-btn">
        <FaAlignRight></FaAlignRight>
      </button>
    </div>
    <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
