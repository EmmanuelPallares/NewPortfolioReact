import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"


const Error = () => {
  return (
    <Layout >
      <main className="error-page">
        <div className="error-container">
          <h1>Ops it`s a dead end</h1>
          <Link to="/" className="btn">Back home</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
