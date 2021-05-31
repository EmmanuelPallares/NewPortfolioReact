import React from "react"
import { IconContext } from "react-icons"
import {
  FaFacebookSquare,
  FaLinkedin,
  
  FaGithub,
  FaYoutube
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <IconContext.Provider
    value={{ color: "#3b5998", className: "social-icon"  }}
  ><FaFacebookSquare />
  </IconContext.Provider>,
    url: "https://www.facebook.com/emmanuel.vitos/",
  },
  {
    id: 2,
    icon: <IconContext.Provider
    value={{ color: "#FF0000", className: "social-icon"  }}
  ><FaYoutube />
  </IconContext.Provider>,
    url: "https://www.youtube.com/channel/UCuIxz8hyMA91YWSmH4SJWhg",
  }
  ,
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/EmmanuelPallares",
  },
  {
    id: 4,
    icon: <IconContext.Provider
    value={{ color: "#2867B2", className: "social-icon"  }}
  ><FaLinkedin />
  </IconContext.Provider>,
    url: "https://www.twhttps://www.linkedin.com/in/emmanuel-pallares-38694a1b0/itter.com",
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
