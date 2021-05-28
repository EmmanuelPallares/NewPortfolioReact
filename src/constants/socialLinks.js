import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  
  FaGithub,
  FaYoutube
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/emmanuel.vitos/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twhttps://www.linkedin.com/in/emmanuel-pallares-38694a1b0/itter.com",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/EmmanuelPallares",
  },
  
  {
    id: 4,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/channel/UCuIxz8hyMA91YWSmH4SJWhg",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
