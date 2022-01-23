import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import { IconContext } from "react-icons"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaAngular,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { DiMongodb, DiMysql, DiNpm, DiGit } from "react-icons/di"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="about me description" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="underline"></div>
            {/* Icons Stack  COMMENT*/}
            <IconContext.Provider
              value={{ color: "#DD4B25", className: "service-icon" }}
            >
              <FaHtml5 />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#0091CA", className: "service-icon" }}
            >
              <FaCss3Alt />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#563d7c", className: "service-icon" }}
            >
              <FaBootstrap />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#EFD81D", className: "service-icon" }}
            >
              {" "}
              <IoLogoJavascript />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#61dafb", className: "service-icon" }}
            >
              {" "}
              <FaReact />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#FF0000", className: "service-icon" }}
            >
              {" "}
              <FaAngular />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#13aa52", className: "service-icon" }}
            >
              {" "}
              <DiMongodb />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#232531", className: "service-icon" }}
            >
              {" "}
              <FaPhp />
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "#4479A1", className: "service-icon" }}
            >
              {" "}
              <DiMysql />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#231F20", className: "service-icon" }}
            >
              {" "}
              <DiNpm />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#24292E", className: "service-icon" }}
            >
              {" "}
              <FaGithub />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#f14e32", className: "service-icon" }}
            >
              {" "}
              <DiGit />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#026E00", className: "service-icon" }}
            >
              <FaNodeJs />
            </IconContext.Provider>
            {/* <div className="about-stack">
          {stack.map(item =>{ 
            return <span key={item.id}>{item.title}</span>
          })}
        </div>  */}
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          localFile {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
  }
`
export default About
