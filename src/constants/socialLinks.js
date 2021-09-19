import React from "react"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithub, FaMailBulk, FaDownload } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/EmmanuelPallares",
  },
  {
    id: 2,
    icon: (
      <IconContext.Provider value={{ className: "social-icon" }}>
        <FaLinkedin />
      </IconContext.Provider>
    ),
    url: "https://www.linkedin.com/in/emmanuel-pallares-38694a1b0/",
  },
  {
    id: 3,
    icon: (
      <IconContext.Provider value={{ className: "social-icon" }}>
        <FaMailBulk />
      </IconContext.Provider>
    ),
    url: "mailto:emmanuelpallares50@gmail.com",
  },
  {
    text: "CV",
    id: 4,
    icon: (
      <IconContext.Provider value={{ className: "social-icon" }}>
        <FaDownload />
      </IconContext.Provider>
    ),
    url:
      "https://drive.google.com/file/d/1yAg2wPs_ZVxUkStQEdXF0FTvhm7JKVsY/view?usp=sharing",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id.text}>
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
