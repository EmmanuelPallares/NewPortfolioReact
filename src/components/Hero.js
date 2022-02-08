import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import Typewriter from "typewriter-effect";
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("<h1>I'm Emmanuel</h1>")

                  .pauseFor(1600)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("<h1> <span>I'm</span> vitoz.net</h1>")

                  .pauseFor(4000)

                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            <h4>Front-End Developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks></SocialLinks>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
