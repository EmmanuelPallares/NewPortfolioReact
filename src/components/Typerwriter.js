import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterHero = () => {
  return (
    <>
      <Typewriter
        options={{
          loop: true,
          delay: 35,
          deleteSpeed: 8,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("<h1>Hi !</h1>")
            .deleteAll()
            .pauseFor(400)
            .typeString("<h1>I'm Emmanuel P</h1>")
            .pauseFor(350)
            .deleteAll()
            .typeString("<h1>I'm vitoz.dev</h1>")
            .pauseFor(150)
            .deleteAll()
            .typeString("<h2>Full-Stack JS Developer</h2>")
            .pauseFor(400)
            .typeString("<h3>I develop and work with</h3> ")
            .pauseFor(200)
            .typeString("<h4>react, gatsby, nextjs, jsvanilla </h4>")
            .pauseFor(800)
            .deleteChars(33)
            .typeString("<h4>tailwind, bootstrap, material design </h4>")
            .pauseFor(800)
            .deleteChars(37)
            .typeString("<h4>node, express, headlessCMS, mongodb, mysql </h4>")
            .pauseFor(800)
            .deleteChars(43)
            .typeString("<h4>graphql, git, github, npm </h4>")
            .pauseFor(800)
            .deleteChars(26)
            .start();
        }}
      />
      ;
    </>
  );
};

export default TypewriterHero;
