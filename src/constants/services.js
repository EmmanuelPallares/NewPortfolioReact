import React from "react";
import { FaReact, FaServer, FaSellsy } from "react-icons/fa";

export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "Front-End",
    text: `I create landing-page and webapps from scratch or custom
     any template with the best and lastest tools like React, Nextjs, Tailwind css, 
     Responsive web design super-fast apps, fully customizable and scalable.`,
  },
  {
    id: 2,
    icon: <FaServer className="service-icon" />,
    title: "Backend",
    text: `I develop the back-end part for getting full web experience 
    connecting databases like MongoDb, Mysql. Secure apps mainly using Node
     js and Headless-CMS like Graphql and Strapi.`,
  },
  {
    id: 3,
    icon: <FaSellsy className="service-icon" />,
    title: "Digital Marketing",
    text: `SEO, Social Media Manager, Client-Support, Adds and more.`,
  },
];
