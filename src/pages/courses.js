import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import { Link } from "gatsby"

const contact = () => {
  return (
    <Layout>
      <Title title={"Video Tutoriales"}>
        <Link to="/blog" className="btn center-btn">
          YoutubeChannel
        </Link>
        <div className="blog-card">
          <p>hola</p>
          <div className="blog-footer">
            <p>hjjj</p>
            <p>jjjjjjjjj</p>
          </div>
        </div>
      </Title>
    </Layout>
  )
}

export default contact
