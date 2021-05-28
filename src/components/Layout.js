import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false)
  const toogleSidebar=() =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
     <Navbar toogleSidebar={toogleSidebar}/>
     <Sidebar isOpen={isOpen} toogleSidebar={toogleSidebar}/>
     {children}
     <Footer/>
    </>
  )
}

export default Layout
