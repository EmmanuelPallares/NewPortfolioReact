import React from "react"
import { FaCode,FaPenNib } from "react-icons/fa"
import { FcSupport } from "react-icons/fc";


export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Creating a website from scratch, including requirements gathering, design, implementation, quality assurance as well as maintenance and support.`,
  },
  {
    id: 2,
    icon: <FaPenNib className="service-icon"/>,
    title: "web design",
    text: `Web Design Services That Maximize Your Revenue
    In today’s digital world, your website is the first interaction consumers have with your business.`,
  },
  {
    id: 3,
    icon: <FcSupport className="service-icon" />,
    title: "Website support",
    text: `Your website needs care and support to perform at it´s best.`,
  },
]
