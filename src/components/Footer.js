import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>
          copyright&copy;{new Date().getFullYear()} <br></br>
          PAPRI all rights reserved
        </h4>
        <a
          href="https://portfolio-admin-papri.herokuapp.com/admin/"
          className="btn"
        >
          Manage the API from here (ADMIN PANEL)
        </a>
      </div>
    </footer>
  )
}

export default Footer
